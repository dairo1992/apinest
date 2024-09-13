import { IsEmail, IsInt, IsString, Min } from 'class-validator';

export class CreatePersonaDto {
  @IsInt()
  @Min(1)
  CONJUNTO: number;
  @IsString()
  TIPO_DOCUMENTO: string;
  @IsInt()
  DOCUMENTO: number;
  @IsString()
  NOMBRE: string;
  @IsInt()
  TORRE: number;
  @IsInt()
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
  PLACA: string;
}
