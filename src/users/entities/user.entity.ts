import { Order } from './../../orders/entities/order.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';

export enum Role {
  SuperAdmin = 'SuperAdmin',
  Admin = 'Admin',
  User = 'User',
}
export class AddressShipping {
  name: string;
  phone: string;
  address: string;
}
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  name: string;

  @Column('text', { nullable: true })
  phone: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('date', { nullable: true })
  birthday: Date;

  @Column('text', { nullable: true })
  avatar: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  role: Role;

  // @Column()
  // address: string;

  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @Column('text', { array: true, nullable: false })
  address: string[];

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

  @OneToMany(() => Order, (order) => order.user)
  order: Order;
}
