import {Injectable} from '@nestjs/common';
import {TodolistOrmDocument, TodolistOrmEntity} from './todolist.orm-entity';
import {TodolistMapper} from './todolist.mapper';
import {LoadTodolistPort} from "../../domains/ports/out/load-todolist.port";
import {TodolistStatePort} from "../../domains/ports/out/todolist-state.port";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {TodolistEntity, TodolistId} from "../../domains/entities/todolist.entity";
import {UpdateTodolistCommand} from "../../domains/ports/in/update-todolist.command";

@Injectable()
export class TodolistPersistenceAdapterService implements LoadTodolistPort, TodolistStatePort {
    constructor(
        @InjectModel(TodolistOrmEntity.name)
        private _todolistRepository: Model<TodolistOrmDocument>,
    ) {
    }

    async loadTodolist(todolistId: TodolistId): Promise<any> {
        try {
            const todolist = await this._todolistRepository.findById(todolistId)
            return TodolistMapper.mapToDomain(todolist)
        } catch (e) {
            throw new Error('Todolist not found');
        }


    }

    async create(title: string): Promise<TodolistEntity> {
        const todolist = await new this._todolistRepository({title}).save()
        return TodolistMapper.mapToDomain(todolist)
    }

    async delete(todolistId: TodolistId): Promise<boolean> {
        await this._todolistRepository.findByIdAndDelete(todolistId)
        return true
    }

    async update(updateTodolistCommand: UpdateTodolistCommand): Promise<TodolistEntity> {
        const todolistOrmEntity = TodolistMapper.mapToOrm(new TodolistEntity(updateTodolistCommand.id, updateTodolistCommand.title))
        const todolist = await this._todolistRepository.findByIdAndUpdate(updateTodolistCommand.id, todolistOrmEntity, {new: true})
        return TodolistMapper.mapToDomain(todolist)
    }

    async getList(): Promise<TodolistEntity[]> {
        const todoLists = await this._todolistRepository.find({}).exec()
        return todoLists.map(todolist => TodolistMapper.mapToDomain(todolist))
    }
}
