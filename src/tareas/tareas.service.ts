import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { tarea } from 'src/schemas/tareas.schema';
import { CrearTareaDTO } from 'src/dto/create-tarea-dto';
import { ActualizarTareaDTO } from 'src/dto/update-tarea-dto';

@Injectable()
export class TareasService {
  constructor(@InjectModel('tarea') private tareaModel: Model<tarea>) {}

  findAll() {
    return this.tareaModel.find();
  }

  async create(createTarea: CrearTareaDTO) {
    const newTarea = new this.tareaModel(createTarea);
    return newTarea.save();
  }

  async findOne(id: string) {
    return this.tareaModel.findById(id);
  }

  async delete(id: string) {
    return this.tareaModel.findByIdAndDelete(id);
  }

  async update(id: string, tarea: ActualizarTareaDTO) {
    return this.tareaModel.findByIdAndUpdate(id, tarea, { new: true });
  }
}
