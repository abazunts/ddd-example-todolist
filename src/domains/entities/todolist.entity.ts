
export type TodolistId = string

export class TodolistEntity {

    constructor(
        private readonly _id: TodolistId,
        private readonly _title: string,
    ) {
    }

    get id(): TodolistId {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

}
