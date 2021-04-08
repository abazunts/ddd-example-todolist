import {TodolistEntity, TodolistId} from "../../entities/todolist.entity";

export interface LoadTodolistPort {
    loadTodolist(todolistId: TodolistId): Promise<TodolistEntity>
}
