import { ItemFlashsale } from './../../item-flashsales/entities/item-flashsale.entity';
import { ImageItem } from './image-item.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

export enum ItemStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}
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
    enum: ItemStatus,
    default: ItemStatus.Active,
  })
  status: ItemStatus;

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

  @ManyToOne((_) => Category, (category) => category.item)
  category: Category;

  @OneToMany(() => ImageItem, (imageItem) => imageItem.item)
  imageItem: ImageItem;

  @OneToMany(() => ItemFlashsale, (itemFlashsale) => itemFlashsale.item)
  itemFlashsale: ItemFlashsale;
}
