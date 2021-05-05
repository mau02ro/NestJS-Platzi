import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:producId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('producId') producId: string,
  ) {
    return `categories ${categoryId}, ${producId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
