import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  async getAll() {
    return 'Obtener todos los productos';
  }

  async getById() {
    return 'Obtener producto por ID';
  }

  async create() {
    return 'Crear producto';
  }

  async update() {
    return 'Actualizar el producto';
  }

  async delete() {
    return 'Eliminar producto';
  }
}