import { IsNumber, IsString } from 'class-validator';

export class UserModel {
  @IsNumber()
  id: number;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;
}
