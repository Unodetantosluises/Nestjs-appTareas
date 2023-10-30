import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class ActualizarTareaDTO {
  @IsString()
  @IsOptional()
  titulo?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsBoolean()
  @IsOptional()
  terminada?: boolean;
}
