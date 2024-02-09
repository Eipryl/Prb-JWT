import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { VerifyTokenStrategy } from './strategies/verify-token-strategy';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [AuthController],
  imports: [JwtModule, UserModule],
  providers: [AuthService, VerifyTokenStrategy],
})
export class AuthModule {}
