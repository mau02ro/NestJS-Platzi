import { Controller, Post, Body } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
