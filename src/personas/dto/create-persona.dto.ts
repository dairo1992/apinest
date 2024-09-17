import { IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class CreatePersonaDto {
  @IsInt()
  CONJUNTO: number;

  @IsString()
  TIPO_DOCUMENTO: string;

  @IsInt()
  DOCUMENTO: number;

  @IsString()
  NOMBRE: string;

  @IsInt()
  @IsOptional()
  TORRE: number;

  @IsInt()
  @IsOptional()
  APTO: number;

  @IsInt()
  ROL: number;

  @IsInt()
  TELEFONO: number;

  @IsEmail()
  CORREO: string;

  @IsString()
  TIPO_VEHICULO: string;
  
  @IsString()
  @IsOptional()
  PLACA: string;
}
