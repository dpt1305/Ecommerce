import { Voucher } from './../../vouchers/entities/voucher.entity';
import { User } from './../../users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';

export enum OrderStatus {
  Waiting = 'Waiting',
  Delivering = 'Delivering',
  Canceled = 'Canceled',
  Closed = 'Closed',
}
@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.Waiting,
  })
  status: OrderStatus;

  @Column('float')
  shippingPrice: number;

  @Column('float')
  itemsPrice: number;

  @Column('float')
  total: number;

  @Column('text')
  addressShipping: string;

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
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.order)
  user: User;

  @ManyToOne(() => Voucher, (voucher) => voucher.order)
  voucher: Voucher;
}
