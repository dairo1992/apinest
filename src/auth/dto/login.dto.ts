import { Transform } from 'class-transformer';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNumber()
  CONJUNTO: number;

  @IsNumber()
  USUARIO: number;

  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(6)
  PASSWORD: string;
}
