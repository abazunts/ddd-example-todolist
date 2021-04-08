import {CreateTodolistCommand} from "./create-todolist.command";
import {TodolistEntity, TodolistId} from "../../entities/todolist.entity";
import {UpdateTodolistCommand} from "./update-todolist.command";

export const TodolistUseCaseSymbol = Symbol('CreateTodolistUseCaseSymbol');

export interface TodolistUseCase {
    createTodolist(command: CreateTodolistCommand): Promise<TodolistEntity>
    updateTodolist(command: UpdateTodolistCommand): Promise<TodolistEntity>
    deleteTodolist(todolistId: TodolistId): Promise<boolean>
    getList(): Promise<TodolistEntity[]>
}

