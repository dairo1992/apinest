import { IsInt, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  NOMBRE: string;
  @IsString()
  ROUTE: string;
  @IsString()
  IMAGE: string;
  @IsString()
  COLOR: string;
  @IsInt()
  CANT_TORRES: number;
}
