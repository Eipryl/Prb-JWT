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
import pg from 'pg';

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

  @Get('date')
  async getDate() {
    const pool = await new pg.Pool({
      connectionString:
        'postgres://eipryl:EcK4BSra0NpjLExzUlG8V4IOydHyq9Ip@dpg-cn2ngv7sc6pc7394tnvg-a/db_nodejs_render',
    });
    const result = await pool.query('SELECT NOW()');
    return result.rows[0];
  }
}
