import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Customer } from './customer.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  role: string;

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

  @OneToOne(() => Customer, (costumer) => costumer.user, { nullable: true })
  @JoinColumn({
    name: 'customer_id',
  })
  customer: Customer;
}
