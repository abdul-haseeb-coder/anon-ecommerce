// main.rs

use actix_web::{App, HttpResponse, HttpServer, Responder, web};
use dotenv::dotenv;
use std::env;
//This file be changed very soon
#[derive(Debug, serde::Serialize, serde::Deserialize)]
struct Task {
    id: u32,
    title: String,
    completed: bool,
}

struct AppState {
    tasks: Vec<Task>,
}

async fn get_tasks(data: web::Data<AppState>) -> impl Responder {
    let tasks = &data.tasks;
    HttpResponse::Ok().json(tasks)
}

async fn create_task(data: web::Data<AppState>, new_task: web::Json<Task>) -> impl Responder {
    let mut tasks = &mut data.tasks;
    tasks.push(new_task.into_inner());
    HttpResponse::Ok().body("Task created successfully")
}

async fn delete_task(data: web::Data<AppState>, task_id: web::Path<u32>) -> impl Responder {
    let mut tasks = &mut data.tasks;
    let index = tasks.iter().position(|task| task.id == *task_id);
    match index {
        Some(idx) => {
            tasks.remove(idx);
            HttpResponse::Ok().body("Task deleted successfully")
        }
        None => HttpResponse::NotFound().body("Task not found"),
    }
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    let port = env::var("PORT").unwrap_or_else(|_| "8080".to_owned());

    let app_state = web::Data::new(AppState {
        tasks: vec![
            Task {
                id: 1,
                title: "Buy groceries".to_owned(),
                completed: false,
            },
            Task {
                id: 2,
                title: "Clean the house".to_owned(),
                completed: true,
            },
        ],
    });

    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone())
            .route("/tasks", web::get().to(get_tasks))
            .route("/tasks", web::post().to(create_task))
            .route("/tasks/{id}", web::delete().to(delete_task))
    })
    .bind(format!("127.0.0.1:{}", port))?
    .run()
    .await
}
