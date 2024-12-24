use mongodb::Database;
use crate::{config::Config, pub_struct};

pub_struct!(;AppState {
    conf: Config,
    db: Database,
});