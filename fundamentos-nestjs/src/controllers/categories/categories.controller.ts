import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:producId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('producId') producId: string,
  ) {
    return `categories ${categoryId}, ${producId}`;
  }
}
