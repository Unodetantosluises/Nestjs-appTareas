import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CrearTareaDTO } from 'src/dto/create-tarea-dto';

@Controller('tareas')
export class TareasController {
  constructor(private tareasService: TareasService) {}

  @Get()
  findAll() {
    return this.tareasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tarea = await this.tareasService.findOne(id);
    if (!tarea) throw new NotFoundException('Esta Tarea no se encuentra');
    return tarea;
  }

  @Post()
  async create(@Body() body: CrearTareaDTO) {
    try {
      return await this.tareasService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Esta tarea ya existe');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const tarea = await this.tareasService.delete(id);
    if (!tarea) throw new NotFoundException('Tarea no Encontrada');
    return tarea;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const tarea = await this.tareasService.update(id, body);
    if (!tarea) throw new NotFoundException('Tarea no encontrada');
    return tarea;
  }
}
