import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tareaDB'),
    TareasModule,
  ],
})
export class AppModule {}
