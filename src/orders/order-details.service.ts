import { ItemsService } from './../items/items.service';
import { ItemFlashsale } from './../item-flashsales/entities/item-flashsale.entity';
import { Flashsale } from './../flashsales/entities/flashsale.entity';
import { Item } from './../items/entities/item.entity';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetailsRepository } from './order-details.repository';
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { getConnection } from 'typeorm';
// import { CreateOrderDetailDto}
@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetailsRepository)
    private orderDetailsRepository: OrderDetailsRepository,
    private itemsService: ItemsService,
  ) {}
  async create(createOrderDetailDto: CreateOrderDetailDto) {
    // {
    //   "itemId": "81d18c6e-94d1-473a-999a-93ac4db9ff89",
    //   "quantity": 10
    // }


    const { itemId, quantity } = createOrderDetailDto;

    const item = await this.itemsService.findOne(itemId);

    const timeNow = new Date();

    const query = await getConnection()
      .createQueryBuilder()
      .select('item')
      .addSelect('item_flashsale.id', 'item_flashsale')
      .addSelect('item.price*(1-item_flashsale.discount)', 'realPrice')
      .from(ItemFlashsale, 'item_flashsale')
      .leftJoin('item_flashsale.item', 'item')
      .innerJoin('item_flashsale.flashsale', 'flashsale')
      .where('item.id = :id', { id: itemId })
      .andWhere('flashsale.startSale < :timeNow', { timeNow })
      .andWhere('flashsale.endSale > :timeNow', { timeNow })
      .orderBy('item_flashsale.discount', 'DESC')
      .limit(1)
      .execute();

    const itemFlashsale = query[0]
      ? await getRepository(ItemFlashsale)
          .createQueryBuilder('item_flashsale')
          .where('item_flashsale.item = :id', { id: itemId })
          .getOne()
      : null;
    const orderDetail = await this.orderDetailsRepository.create({
      quantity,
      item,
      itemFlashsale,
      price: query[0] ? query[0].realPrice : item.price,
    });

    return await this.orderDetailsRepository.save(orderDetail);

    ////////// add orderId (create order first)
  }
}
