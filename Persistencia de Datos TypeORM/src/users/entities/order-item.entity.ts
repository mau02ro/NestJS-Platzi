/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
} from 'typeorm';

import { Product } from 'src/products/entities/product.entity';
import { Order } from './order.entity';

@Entity({
  name: 'orders_items',
})
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    name: 'crate_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  crateAt: string;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: string;

  @Column({
    type: 'int',
  })
  quantity: number;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;
}
