import { IsEmail, IsString, MaxLength } from 'class-validator';

export class UserCreateDTO {
  @IsString()
  @MaxLength(40)
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
