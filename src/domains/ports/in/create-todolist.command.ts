export class CreateTodolistCommand {
    constructor(
        private readonly _title: string,
    ) {
    }

    get title(): string {
        return this._title;
    }

}
