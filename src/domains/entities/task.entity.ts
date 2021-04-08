import {TodolistId} from "./todolist.entity";

export type TaskId = string
export type TaskStatus = string

export class TaskEntity {
    constructor(
        private readonly _id: TaskId,
        private readonly _title: string,
        private readonly _status: TaskStatus,
        private readonly _todolistId: TodolistId,
    ) {
    }

    get id(): TaskId {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get status(): TaskStatus {
        return this._status;
    }

    get todolistId(): TodolistId {
        return this._todolistId;
    }


}
