import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';

import { Product } from './product.entity';

@Entity({
  name: 'categories',
})
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  name: string;

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

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}
