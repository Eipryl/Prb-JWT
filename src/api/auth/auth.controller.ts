import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthModel } from './auth.model';
import { UserModel } from '../user/user.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('sign-in')
  async signIn(@Body() data: AuthModel) {
    return this.service.signIn(data);
  }

  @Post('sign-up')
  async signUp(@Body() data: UserModel) {
    return this.service.signUp(data);
  }
}
