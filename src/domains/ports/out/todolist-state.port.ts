import {TodolistEntity, TodolistId} from "../../entities/todolist.entity";
import {UpdateTodolistCommand} from "../in/update-todolist.command";

export interface TodolistStatePort {
    create(title: string): Promise<TodolistEntity>
    update(updateTodolistCommand: UpdateTodolistCommand): Promise<TodolistEntity>
    delete(todolistId: TodolistId): Promise<boolean>
    getList(): Promise<TodolistEntity[]>
}
