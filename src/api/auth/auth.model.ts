import { IsString } from 'class-validator';

export class AuthModel {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
