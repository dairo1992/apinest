import { Transform } from 'class-transformer';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNumber()
  USUARIO: number;

  @IsNumber()
  PERSONA: number;

  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(6)
  PASSWORD: string;
}
