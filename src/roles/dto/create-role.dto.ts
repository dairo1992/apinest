import { IsInt, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsInt()
  VALUE: number;
  @IsString()
  LABEL: string;
}
