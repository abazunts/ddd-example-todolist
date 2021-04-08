import {TodolistStatePort} from "../ports/out/todolist-state.port";
import {CreateTodolistCommand} from "../ports/in/create-todolist.command";
import {TodolistUseCase} from "../ports/in/todolist.use-case";
import {UpdateTodolistCommand} from "../ports/in/update-todolist.command";
import {TodolistEntity, TodolistId} from "../entities/todolist.entity";
import {LoadTodolistPort} from "../ports/out/load-todolist.port";

export class TodolistService implements TodolistUseCase {
    constructor(
        private readonly _todolistStatePort: TodolistStatePort,
        private readonly _loadTodolistPort: LoadTodolistPort,
    ) {
    }

    createTodolist(command: CreateTodolistCommand): Promise<TodolistEntity> {
        return this._todolistStatePort.create(command.title)
    }

    updateTodolist(command: UpdateTodolistCommand): Promise<TodolistEntity> {
        return this._todolistStatePort.update(command)
    }

    deleteTodolist(todolistId: TodolistId): Promise<boolean> {
        return this._todolistStatePort.delete(todolistId)
    }

    loadTodolist(todolistId: TodolistId): Promise<TodolistEntity> {
        return this._loadTodolistPort.loadTodolist(todolistId)
    }

    getList(): Promise<TodolistEntity[]> {
        return this._todolistStatePort.getList()
    }

}
