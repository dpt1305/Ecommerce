import { Item } from './../items/entities/item.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { OrdersService } from './orders.service';
import { OrdersRepository } from './orders.repository';
import { Order } from './entities/order.entity';
import { ItemFlashsalesService } from './../item-flashsales/item-flashsales.service';
import { ItemsService } from './../items/items.service';
import { ItemFlashsale } from './../item-flashsales/entities/item-flashsale.entity';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetailsRepository } from './order-details.repository';
import { Injectable, BadRequestException } from '@nestjs/common';
import { getRepository, getConnection } from 'typeorm';
// import { CreateOrderDetailDto}
@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetailsRepository)
    private orderDetailsRepository: OrderDetailsRepository,
    @InjectRepository(OrdersRepository)
    private ordersRepository: OrdersRepository,
    private itemsService: ItemsService,
    private itemFlashsalesService: ItemFlashsalesService,
  ) {}
  async create(createOrderDetailDto: CreateOrderDetailDto) {
  // "itemId": "81d18c6e-94d1-473a-999a-93ac4db9ff89",
  // "orderId": "45176329-71ec-435d-b067-54fef1b0e4c2",
  // "quantity": 1
  // }

    const { itemId, quantity, orderId } = createOrderDetailDto;
    const item = await this.itemsService.findOne(itemId);

    // query => get item applied flash sale
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
      // .andWhere('flashsale.startSale < :timeNow', { timeNow })
      // .andWhere('flashsale.endSale > :timeNow', { timeNow })
      .orderBy('item_flashsale.discount', 'DESC')
      .limit(1)
      .execute();
    console.log(query);

    const itemFlashsale = query[0]
      ? await this.itemFlashsalesService.findOne(query[0].item_flashsale)
      : null;
    console.log(itemFlashsale);

    //# check quantity
    if (
      itemFlashsale.quantity != 0 &&
      (quantity > itemFlashsale.quantity || quantity == 0)
    ) {
      throw new BadRequestException('Quantity is not good.');
    }
    if (quantity > item.quantity || quantity == 0) {
      throw new BadRequestException('Quantity is not good.');
    }

    //# update & check quantity for flashsale || Item
    if (itemFlashsale && itemFlashsale.quantity != 0) {
      const newItemFlashsale = {
        quantity: itemFlashsale.quantity - quantity,
      };
      await this.itemFlashsalesService.update(
        itemFlashsale.id,
        newItemFlashsale,
      );
    } else {
      const newItem = {
        quantity: item.quantity - quantity,
      };
      await this.itemsService.update(item.id, newItem, null);
    }

    //# save order detail
    const order = await this.ordersRepository.findOne({ id: orderId });
    console.log(order);

    const orderDetail = await this.orderDetailsRepository.create({
      quantity,
      item,
      itemFlashsale,
      price: query[0] ? query[0].realPrice : item.price,
      order,
    });
    console.log(orderDetail);
    await this.orderDetailsRepository.save(orderDetail);

    //# update total for order
    const query2 = await getConnection()
      .createQueryBuilder()
      .select('order')
      .addSelect('order_detail')
      .from(OrderDetail, 'order_detail')
      .innerJoin('order_detail.order', 'order')
      .execute();
    console.log(query2);
  }
}
