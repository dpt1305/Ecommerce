import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Role {
  SuperAdmin,
  Admin,
  User,
}
export class AddressShipping {
  name: string;
  phone: string;
  address: string;
}
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  phone: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('date')
  birthday: Date;

  @Column('text')
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

  @Column('json', { array: true })
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
}
