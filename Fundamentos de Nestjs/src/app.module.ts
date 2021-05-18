import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UserController } from './controllers/user/user.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { ProductsService } from './services/products/products.service';
import { BrandService } from './services/brand/brand.service';
import { CategoriesService } from './services/categories/categories.service';
import { CustomersService } from './services/customers/customers.service';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UserController,
    CustomerController,
    BrandController,
  ],
  providers: [
    AppService,
    ProductsService,
    BrandService,
    CategoriesService,
    CustomersService,
    UsersService,
  ],
})
export class AppModule {}
