import { OrderStatus } from './entities/order.entity';
import { VouchersService } from './../vouchers/vouchers.service';
import { UsersService } from './../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { getManager } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersRepository)
    private ordersRepository: OrdersRepository,
    private usersService: UsersService,
    private vouchersService: VouchersService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { voucherId, userId } = createOrderDto;
    const user = await this.usersService.findOne(userId);
    console.log(user);

    // const voucher = await this.get
    //   .createQueryBuilder('voucher')
    //   .from('voucher')
    //   .where('id = :id', { id: voucherId });
    // console.log(voucher);

    // const order = await this.ordersRepository.create( {
    //   ...createOrderDto,
    //   user,
    //   voucher: voucher ? voucher : null,
    //   status: OrderStatus.Waiting,
    // });
    // console.log(order);
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
