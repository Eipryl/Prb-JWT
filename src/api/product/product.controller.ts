import { Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AccessTokenGuard } from '../../common/guards/acces-token.guard';

@UseGuards(AccessTokenGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}
  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  async getById() {
    return this.service.getById();
  }

  @Post()
  async create() {
    return this.service.create();
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
