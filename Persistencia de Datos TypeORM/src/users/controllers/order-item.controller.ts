import { Controller, Body, Post } from '@nestjs/common';

import { OrderItemService } from '../services/order-item.service';
import { CreateOrderItemDto } from '../dtos/order-ietm.dto';

@Controller('order-item')
export class OrderItemController {
  constructor(private itemsService: OrderItemService) {}
  @Post()
  create(@Body() payload: CreateOrderItemDto) {
    return this.itemsService.create(payload);
  }
}
