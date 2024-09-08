import { IsString, IsUUID, MaxLength } from 'class-validator';

export class PostCreateDTO {
  @IsString()
  @MaxLength(50)
  title: string;

  @IsString()
  @MaxLength(500)
  content: string;

  @IsString()
  @IsUUID()
  userId: string;
}
