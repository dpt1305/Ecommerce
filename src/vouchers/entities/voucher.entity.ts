import { IsString, IsNumber, IsInt, IsDate } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum VoucherType {
  'Discount' = 'Discount',
  'Shipping' = 'Shipping',
}
@Entity()
export class Voucher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  code: string;

  @Column('text')
  type: VoucherType;

  @Column('text')
  note: string;

  @Column('float')
  discount: number;

  @Column('float')
  max: number;

  @Column('float')
  min: number;

  @Column('int')
  quantity: number;

  @Column('timestamp')
  startTime: Date;

  @Column('timestamp')
  endTime: Date;

  // @OneToMany()
  // order: 
}
