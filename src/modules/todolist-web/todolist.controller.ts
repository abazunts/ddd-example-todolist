import {Catch, Controller, Get, Inject, Param, Query} from '@nestjs/common';
import {TodolistUseCaseSymbol} from "../../domains/ports/in/todolist.use-case";
import {TodolistService} from "../../domains/services/todolist.service";
import {CreateTodolistCommand} from "../../domains/ports/in/create-todolist.command";
import {UpdateTodolistCommand} from "../../domains/ports/in/update-todolist.command";

@Controller('/todolist')
export class TodolistController {
    constructor(
        @Inject(TodolistUseCaseSymbol) private readonly  _todolistService: TodolistService
    ) {
    }

    @Get('/')
    async createTodolist(
        @Query('title') title: string,
    ) {
        const createTodolistCommand = new CreateTodolistCommand(title);
        const result = await this._todolistService.createTodolist(createTodolistCommand);
        return {result};
    }

    @Get('/:id')
    async getTodolist(
        @Param('id') id: string,
    ) {
        return this._todolistService.loadTodolist(id);
    }

    @Get('/update/:id')
    async updateTodolist(
        @Param('id') id: string,
        @Query('title') title: string,
    ) {
        const updateTodolistCommand = new UpdateTodolistCommand(id, title);
        return this._todolistService.updateTodolist(updateTodolistCommand);
    }

    @Get('/list/list')
    async getList() {
        return this._todolistService.getList();
    }

}
