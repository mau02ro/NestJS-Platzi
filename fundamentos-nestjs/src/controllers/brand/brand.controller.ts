import { Controller, Post, Body } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
