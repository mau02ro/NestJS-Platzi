import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';

import { Product } from './../entities/product.entity';
import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductsDto,
} from './../dtos/products.dtos';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  findAll(params?: FilterProductsDto) {
    if (params) {
      const filter: FilterQuery<Product> = {};

      const { minPrice, maxPrice } = params;
      if (minPrice && maxPrice) {
        filter.price = {
          $gte: minPrice,
          $lte: maxPrice,
        };
      }

      const { limit, offset } = params;
      if (limit && offset) {
        return this.productModel
          .find(filter)
          .skip(offset)
          .limit(limit)
          .populate('brand')
          .exec();
      }

      return this.productModel.find(filter).populate('brand').exec();
    }
    return this.productModel.find().populate('brand').exec();
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  create(data: CreateProductDto) {
    const newProduct = new this.productModel(data);

    return newProduct.save();
  }

  update(id: string, changes: UpdateProductDto) {
    const product = this.productModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  remove(id: string) {
    return this.productModel.findByIdAndRemove(id);
  }
}
