import { CategoryStatus } from './../../categories/entities/category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Column, PrimaryGeneratedColumn, }
@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  barcode: string;

  @Column('float')
  importPrice: number;

  @Column('float')
  price: number;

  @Column('float')
  weight: number;

  @Column('text')
  avatar: string;

  @Column('int')
  quantity: number;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: CategoryStatus,
    default: CategoryStatus.Active,
  })
  status: CategoryStatus;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  modified_at: Date;
}
