import { Module } from '@nestjs/common';

import { UserController } from './controllers/user.controller';

import { UsersService } from './services/users.service';

import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
