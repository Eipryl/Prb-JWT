import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModel } from './auth.model';
import * as bcrypt from 'bcrypt';
import { UserModel } from '../user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async signIn(data: AuthModel) {
    const user = await this.userService.getByEmail(data.email);
    if (!user) throw new BadRequestException('User does not exist');
    const passwordVerify = await bcrypt.compare(data.password, user.password);
    if (!passwordVerify) throw new BadRequestException('Password is incorrect');
    return await this.getToken(user.id);
  }

  async signUp(data: UserModel) {
    const encryptPass = bcrypt.hashSync(data.password, 10); //QUESTION
    const user = await this.userService.create({
      ...data,
      password: encryptPass,
    });
    return await this.getToken(user.id);
  }

  async getToken(userId: number) {
    return await this.jwtService.signAsync(
      {
        userId,
      },
      {
        secret: '123',
        expiresIn: '1m',
      },
    );
  }
}
