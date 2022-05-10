import { ItemFlashsale } from './../../item-flashsales/entities/item-flashsale.entity';
import { Item } from './../../items/entities/item.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  quantity: number;

  @Column('float')
  price: number;

  @ManyToOne(() => Item, (item) => item.orderDetail)
  item: Item;

  @ManyToOne(() => ItemFlashsale, (itemFlashsale) => itemFlashsale.orderDetail)
  itemFlashsale: ItemFlashsale;
}
