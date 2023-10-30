import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { tarea, tareaSchema } from '../schemas/tareas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: tarea.name,
        schema: tareaSchema,
      },
    ]),
  ],
  controllers: [TareasController],
  providers: [TareasService],
})
export class TareasModule {}
