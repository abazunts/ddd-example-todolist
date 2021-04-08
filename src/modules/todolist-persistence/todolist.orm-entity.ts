import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type TodolistOrmDocument = TodolistOrmEntity & Document;

@Schema({
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
})
export class TodolistOrmEntity {
    @Prop({required: true})
    title: string;
}

export const TodolistOrmSchema = SchemaFactory.createForClass(TodolistOrmEntity);
