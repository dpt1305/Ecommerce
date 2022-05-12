import { ItemFlashsalesService } from './../item-flashsales/item-flashsales.service';
import { ItemsService } from './../items/items.service';
import { OrderDetailsService } from './order-details.service';
import { Voucher } from './../vouchers/entities/voucher.entity';
import { OrderStatus } from './entities/order.entity';
import { VouchersService } from './../vouchers/vouchers.service';
import { UsersService } from './../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { getManager, getConnection } from 'typeorm';
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersRepository)
    private ordersRepository: OrdersRepository,
    private usersService: UsersService,
    private vouchersService: VouchersService,
    private orderDetailsService: OrderDetailsService,
    private itemsService: ItemsService,
    private itemFlashsalesService: ItemFlashsalesService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    let { voucherCode, userId, items, shippingPrice } = createOrderDto;
    console.log(createOrderDto);

    let user, voucher;
    try {
      user = await this.usersService.findOne(userId);
      
      voucher = voucherCode
        ? await this.vouchersService.findVoucherByCode(voucherCode)
        : null;
    } catch (error) {
      throw new NotFoundException('Can not find information.');
    }
    console.log(user, voucher);

    //# calculate  order.itemsPrice
    let itemsPrice = 0;
    for (let index = 0; index < items.length; index++) {
      const query = await this.itemsService.getItemWithFlashsale(
        items[index].itemId,
      );
      const item = await this.itemsService.findOne(items[index].itemId);
      console.log(query, 111111, item);

      //# check quantity
      this.checkQuantity(
        items[index].quantity,
        query.item_flashsale_quantity,
        query.item_quantity,
      );

      //# update quantity and calculate itemsPrice price
      itemsPrice = await this.updateQuantity(
        query,
        item,
        items[index].quantity,
        itemsPrice,
      );
    }
    console.log(itemsPrice);

    //# apply voucher
    // const voucher = voucherId
    //   ? await this.vouchersService.findOne(voucherId)
    //   : null;
    // console.log(voucher);
    await this.vouchersService.applyVoucher(voucher, itemsPrice, shippingPrice);
    // const order = await this.ordersRepository.create({
    //   ...createOrderDto,
    //   user,
    //   voucher,
    //   status: OrderStatus.Waiting,
    // });
    // return await this.ordersRepository.save(order);
  }

  checkQuantity(
    quantity: number,
    item_flashsale_quantity: number,
    item_quantity: number,
  ) {
    if (
      item_flashsale_quantity != 0 &&
      (quantity > item_flashsale_quantity || quantity == 0)
    ) {
      throw new BadRequestException('Quantity is not good.');
    }
    if (quantity > item_quantity || quantity == 0) {
      throw new BadRequestException('Quantity is not good.');
    }
  }

  // item_flashsale_id: '67b0369f-384e-4035-b82a-a8f5cba6dc2b',
  // item_flashsale_discount: 0.2,
  // item_flashsale_quantity: 3,
  // item_flashsale_flashsaleId: '06d8e80e-2a64-4433-a61e-f238d46545d8',
  // item_flashsale_itemId: '81d18c6e-94d1-473a-999a-93ac4db9ff89',
  // item_id: '81d18c6e-94d1-473a-999a-93ac4db9ff89',
  // item_name: 'Ao nu',
  // item_barcode: '1123423',
  // item_importPrice: 3,
  // price: 15,
  // item_weight: 0.2,
  // item_avatar: 'files/1652165733108-169181282-Ảnh trong VC.png',
  // item_quantity: 20,
  // item_description: 'This is ao nam',
  // item_status: 'Active',
  // item_created_at: 2022-05-10T06:55:33.121Z,
  // item_modified_at: 2022-05-12T03:54:01.667Z,
  // item_categoryId: 'c2d38d51-0f26-480c-ac45-2c17a3ffcfeb',
  // flashsale_id: '06d8e80e-2a64-4433-a61e-f238d46545d8',
  // flashsale_name: '12/05',
  // flashsale_description: 'Sale to sale to',
  // flashsale_startSale: 2022-05-12T03:30:00.000Z,
  // flashsale_endSale: 2022-05-12T15:30:00.000Z,
  // flashsale_flashSaleBanner: [],
  // flashsale_created_at: 2022-05-12T03:17:39.568Z,
  // flashsale_updated_at: 2022-05-12T03:17:39.568Z,
  // realPrice: 12
  async updateQuantity(itemFlashsale, item, quantity, total) {
    //# update & check quantity for flashsale || Item
    if (itemFlashsale && itemFlashsale.item_flashsale_quantity != 0) {
      const newItemFlashsale = {
        quantity: itemFlashsale.item_flashsale_quantity - quantity,
      };
      await this.itemFlashsalesService.update(
        itemFlashsale.item_flashsale_id,
        newItemFlashsale,
      );
      return itemFlashsale.realPrice * quantity;
    } else {
      const newItem = {
        quantity: item.quantity - quantity,
      };
      await this.itemsService.update(item.id, newItem, null);
      return itemFlashsale.price * quantity;
    }
  }
  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: string) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
