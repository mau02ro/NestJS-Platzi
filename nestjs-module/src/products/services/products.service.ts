import { Injectable, NotFoundException } from '@nestjs/common';

import ProductEntity from 'src/products/entities/product.entity';

import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: ProductEntity[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 100,
      image: 'https://picsum.photos/200/300',
      stock: 50,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);

    if (!product) throw new NotFoundException(`Product #${id} not dound`);

    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    if (!product) null;

    const index = this.products.findIndex((item) => item.id === id);

    this.products[index] = {
      ...product,
      ...payload,
    };

    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) throw new NotFoundException(`Product #${id} not dound`);

    this.products.splice(index, 1);

    return 1;
  }
}
