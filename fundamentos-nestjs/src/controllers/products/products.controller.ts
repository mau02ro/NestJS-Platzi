import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=${limit}, offset=${offset}, brand=${brand}`;
  }

  @Get('filter')
  getProducFilter() {
    return 'yo soy un filter';
  }

  @Get('/:producId')
  getProduct(@Param('producId') producId: string) {
    return `product id -> ${producId}`;
  }
}
