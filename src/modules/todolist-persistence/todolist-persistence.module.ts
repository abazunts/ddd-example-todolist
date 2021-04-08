import {Global, Module} from '@nestjs/common';
import {TodolistPersistenceAdapterService} from './todolist-persistence-adapter.service';
import {MongooseModule} from "@nestjs/mongoose";
import {TodolistOrmEntity, TodolistOrmSchema} from "./todolist.orm-entity";
import {TodolistUseCaseSymbol} from "../../domains/ports/in/todolist.use-case";
import {TodolistService} from "../../domains/services/todolist.service";

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([{name: TodolistOrmEntity.name, schema: TodolistOrmSchema}])
    ],
    providers: [
        TodolistPersistenceAdapterService,
        {
            provide: TodolistUseCaseSymbol,
            useFactory: (todolistPersistenceAdapterService: TodolistPersistenceAdapterService) => {
                return new TodolistService(todolistPersistenceAdapterService, todolistPersistenceAdapterService);
            },
            inject: [TodolistPersistenceAdapterService]
        }
    ],
    exports: [
        TodolistUseCaseSymbol
    ]
})
export class TodolistPersistenceModule {
}
