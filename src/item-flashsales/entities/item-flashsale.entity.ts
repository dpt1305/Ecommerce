import { OrderDetail } from './../../orders/entities/order-detail.entity';
import { Item } from './../../items/entities/item.entity';
import { Flashsale } from './../../flashsales/entities/flashsale.entity';
import { Column, PrimaryGeneratedColumn, ManyToOne, Entity, OneToMany } from 'typeorm';
@Entity()
export class ItemFlashsale {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  discount: number;

  @Column('int')
  quantity: number;

  @ManyToOne(() => Flashsale, (flashsale) => flashsale.itemFlashsale)
  flashsale: Flashsale;

  @ManyToOne(() => Item, (item) => item.itemFlashsale)
  item: Item;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.itemFlashsale)
  orderDetail: OrderDetail;
}
