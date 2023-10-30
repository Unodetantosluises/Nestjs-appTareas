import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class tarea {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  titulo: string;

  @Prop({
    trim: true,
  })
  descripcion: string;

  @Prop({
    default: false,
  })
  terminada: boolean;
}

export const tareaSchema = SchemaFactory.createForClass(tarea);
