import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Customer } from './customer.entity';
import { OrderItem } from './order-item.entity';

@Entity({
  name: 'orders',
})
export class Order {
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

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem;
}
