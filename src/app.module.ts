import {Module} from "@nestjs/common";
import {TodolistPersistenceModule} from './modules/todolist-persistence/todolist-persistence.module';
import {TodolistWebModule} from './modules/todolist-web/todolist-web.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
	imports: [
		MongooseModule.forRoot(
			'mongodb://localhost:27017/Todolist?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			},
		),
		TodolistPersistenceModule,
		TodolistWebModule
	]
})
export class AppModule {}
