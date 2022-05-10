import { ItemFlashsale } from './../item-flashsales/entities/item-flashsale.entity';
import { Flashsale } from './../flashsales/entities/flashsale.entity';
import { Item } from './../items/entities/item.entity';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetailsRepository } from './order-details.repository';
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm'; 
// import { CreateOrderDetailDto}
@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetailsRepository)
    private orderDetailsRepository: OrderDetailsRepository,
  ) {}
  async create(createOrderDetailDto: CreateOrderDetailDto) {
    const { itemId, quantity } = createOrderDetailDto;
    const item = await getRepository(Item)
      .createQueryBuilder('item')
      .where('item.id = :id', { id: itemId })
      .getOne();

    const itemFlashsale = await getRepository(ItemFlashsale)
      .createQueryBuilder('item_flashsale')
      .where('item_flashsale.item = :id', { id: item.id })
      .getOne();

    const orderDetail = await this.orderDetailsRepository.create({
      quantity,
      item,
      itemFlashsale: itemFlashsale ? itemFlashsale : null,
      price: itemFlashsale
        ? item.price * (1 - itemFlashsale.discount)
        : item.price,
    });
    return await this.orderDetailsRepository.save(orderDetail);

    ////////// add orderId (create order first)
  }
}
