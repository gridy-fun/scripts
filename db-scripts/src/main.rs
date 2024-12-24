#[macro_use]
mod config;
mod utils;
mod models;

use mongodb::{Client, options::{ClientOptions}};
use std::error::Error;
use tokio;
use std::sync::Arc;
use bson::doc;
use crate::utils::generate_quadtree;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let conf = config::load();

    // A Client is needed to connect to MongoDB:
    let client_options = ClientOptions::parse(&conf.database.connection_string)
        .await
        .unwrap();

    let shared_state = Arc::new(models::AppState {
        conf: conf.clone(),
        db: Client::with_options(client_options)
            .unwrap()
            .database(&conf.database.name)
    });
    if shared_state
        .db
        .run_command(doc! {"ping": 1}, None)
        .await
        .is_err()
    {
        println!("error: unable to connect to database");
    } else {
        println!("database: connected")
    }

    generate_quadtree(&shared_state.db).await;

    Ok(())
}