import { Module } from '@nestjs/common';
import { AuthModule } from './api/auth/auth.module';
import { ProductModule } from './api/product/product.module';
import { UserModule } from './api/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, ProductModule, UserModule, JwtModule.register({})],
})
export class AppModule {}
