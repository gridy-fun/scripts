use bson::doc;
use serde::{Serialize, Deserialize};
use mongodb::{Collection, Database};
use rand::Rng;

#[macro_export]
macro_rules! pub_struct {
    ($($derive:path),*; $name:ident {$($field:ident: $t:ty),* $(,)?}) => {
        #[derive($($derive),*)]
        pub struct $name {
            $(pub $field: $t),*
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
struct Bounds {
    x_min: i32,
    y_min: i32,
    x_max: i32,
    y_max: i32,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
struct QuadTreeNode {
    bounds: Bounds,
    level: i32,
    color: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    children: Option<Vec<QuadTreeNode>>,
    block_id: i64, // New field
}

impl QuadTreeNode {
    fn new(bounds: Bounds, level: i32) -> Self {
        let max_level = 13;  // Match your max_level
        let block_id = if level == max_level {
            let tile_size = 8192 >> level;
            let x_pos = bounds.x_min / tile_size;
            let y_pos = bounds.y_min / tile_size;
            let grid_width = 1 << level;
            (y_pos * grid_width + x_pos) as i64
        } else {
            -1  // Or any sentinel value for non-leaf nodes
        };

        QuadTreeNode {
            bounds,
            level,
            color: None,
            children: None,
            block_id,
        }
    }

    fn subdivide(&mut self) {
        let x_mid = (self.bounds.x_min + self.bounds.x_max) / 2;
        let y_mid = (self.bounds.y_min + self.bounds.y_max) / 2;

        self.children = Some(vec![
            QuadTreeNode::new(Bounds {
                x_min: self.bounds.x_min,
                y_min: self.bounds.y_min,
                x_max: x_mid,
                y_max: y_mid,
            }, self.level + 1),
            QuadTreeNode::new(Bounds {
                x_min: x_mid,
                y_min: self.bounds.y_min,
                x_max: self.bounds.x_max,
                y_max: y_mid,
            }, self.level + 1),
            QuadTreeNode::new(Bounds {
                x_min: self.bounds.x_min,
                y_min: y_mid,
                x_max: x_mid,
                y_max: self.bounds.y_max,
            }, self.level + 1),
            QuadTreeNode::new(Bounds {
                x_min: x_mid,
                y_min: y_mid,
                x_max: self.bounds.x_max,
                y_max: self.bounds.y_max,
            }, self.level + 1),
        ]);
    }
}

fn build_quadtree(bounds: Bounds, max_level: i32, level: i32) -> QuadTreeNode {
    let mut node = QuadTreeNode::new(bounds, level);

    if level < max_level {
        node.subdivide();
        if let Some(children) = &mut node.children {
            for child in children.iter_mut() {
                *child = build_quadtree(child.bounds.clone(), max_level, level + 1);
            }
        }
    } else {
        let mut rng = rand::thread_rng();
        node.color = if rng.gen_bool(0.5) {
            Some("white".to_string())
        } else {
            Some("black".to_string())
        };
    }

    node
}

fn flatten_quadtree(node: &QuadTreeNode, nodes: &mut Vec<QuadTreeNode>) {
    let mut node_copy = node.clone();
    node_copy.children = None;
    nodes.push(node_copy);

    if let Some(children) = &node.children {
        for child in children {
            flatten_quadtree(child, nodes);
        }
    }
}

async fn save_nodes_batched(
    nodes: Vec<QuadTreeNode>,
    collection: &Collection<QuadTreeNode>,
    batch_size: usize,
) {
    for chunk in nodes.chunks(batch_size) {
        collection
            .insert_many(chunk.to_vec(), None).await.expect("TODO: panic message");

        println!("Saved {} nodes", chunk.len());
    }
}

async fn save_quadtree(quadtree: &QuadTreeNode, collection: &Collection<QuadTreeNode>) {
    let mut nodes = Vec::new();
    flatten_quadtree(quadtree, &mut nodes);

    let batch_size = 1000; // Adjust as per memory and performance constraints
    save_nodes_batched(nodes, collection, batch_size).await;
}

pub async fn generate_quadtree(db: &Database) {
    println!("Generating quadtree...");
    let root_bounds = Bounds {
        x_min: 0,
        y_min: 0,
        x_max: 8192,
        y_max: 8192,
    };
    let max_level = 13;

    let quadtree = build_quadtree(root_bounds, max_level, 0);

    let mut flattened_nodes = Vec::new();
    flatten_quadtree(&quadtree, &mut flattened_nodes);

    let collection = db.collection::<QuadTreeNode>("map");

    save_quadtree(&quadtree, &collection).await;

    println!("Quadtree generation complete. Output saved to quadtree.json");
}