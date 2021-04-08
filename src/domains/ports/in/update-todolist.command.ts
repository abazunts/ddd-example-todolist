import {TodolistId} from "../../entities/todolist.entity";

export class UpdateTodolistCommand {
    constructor(
        private readonly _id: TodolistId,
        private readonly _title: string
    ) {
    }

    get title(): string {
        return this._title;
    }

    get id(): TodolistId {
        return this._id;
    }
}
