import { Controller, Post, Body } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
