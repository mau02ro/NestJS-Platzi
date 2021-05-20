import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';

import { Product } from './product.entity';

@Entity()
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
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  crateAt: string;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: string;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}
