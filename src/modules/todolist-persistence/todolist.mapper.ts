import {TodolistOrmDocument, TodolistOrmEntity} from './todolist.orm-entity';
import {TodolistEntity} from "../../domains/entities/todolist.entity";

export class TodolistMapper {
    static mapToDomain(todolistOrmDocument: TodolistOrmDocument): TodolistEntity {
        return new TodolistEntity(
            todolistOrmDocument._id,
            todolistOrmDocument.title
        )
    }

    static mapToOrm(todolistEntity: TodolistEntity): TodolistOrmEntity {
        return {
            title: todolistEntity.title
        }
    }

}
