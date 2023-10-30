import { IsString, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CrearTareaDTO {
  @IsString()
  @IsNotEmpty()
  titulo?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsBoolean()
  @IsOptional()
  terminada?: boolean;
}
