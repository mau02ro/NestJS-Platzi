import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=${limit}, offset=${offset}, brand=${brand}`,
    };
  }

  @Get('filter')
  getProducFilter() {
    return {
      message: 'yo soy un filter',
    };
  }

  @Get('/:producId')
  getOne(@Param('producId') producId: string) {
    return {
      message: `product id -> ${producId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
