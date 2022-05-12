import { ItemsService } from './../items/items.service';
import { OrderDetailsService } from './order-details.service';
import { Voucher } from './../vouchers/entities/voucher.entity';
import { OrderStatus } from './entities/order.entity';
import { VouchersService } from './../vouchers/vouchers.service';
import { UsersService } from './../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';
import { Injectable } from '@nestjs/common';
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
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { voucherId, userId, items } = createOrderDto;
    console.log(createOrderDto);

    const user = await this.usersService.findOne(userId);
    console.log(user);

    const voucher = voucherId
      ? await this.vouchersService.findOne(voucherId)
      : null;
    console.log(voucher);

    console.log(await this.itemsService.getRealPrice(items[0].itemId));
    
    // const order = await this.ordersRepository.create({
    //   ...createOrderDto,
    //   user,
    //   voucher,
    //   status: OrderStatus.Waiting,
    // });
    // return await this.ordersRepository.save(order);
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
