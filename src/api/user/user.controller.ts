import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@UseGuards()
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.service.getById(id);
  }

  @Post()
  async create(@Body() data: UserModel) {
    return this.service.create(data);
  }

  @Put(':id')
  async update() {
    return this.service.update();
  }

  @Delete(':id')
  async delete() {
    return this.service.delete();
  }
}
