import { BadRequestException, Injectable } from '@nestjs/common';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      email: 'primero@gmail.com',
      password: '$2b$10$rxsfGTBFib51xkzyXsWZN.X2YhSfnwIvYUfqfnGxKyR7htMf6AeKO',
      name: 'usuarioEjemplo1',
    },
    {
      id: 2,
      email: 'segundo@gmail.com',
      password: 'contraseña2',
      name: 'usuarioEjemplo2',
    },
    {
      id: 3,
      email: 'tercero@gmail.com',
      password: 'contraseña3',
      name: 'usuarioEjemplo3',
    },
  ];

  async getAll() {
    return this.users;
  }

  async getById(id: number) {
    return this.users.find((item) => item.id === id);
  }

  async getByEmail(email: string) {
    return this.users.find((item) => item.email === email);
  }

  async create(data: UserModel) {
    const userExist = await this.getByEmail(data.email);
    if (userExist) throw new BadRequestException('User already exists');
    this.users.push(data);
    return this.getById(data.id);
  }

  async update() {
    return 'Actualizar el User';
  }

  async delete() {
    return 'Eliminar User';
  }
}
