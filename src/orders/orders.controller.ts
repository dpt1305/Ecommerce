import { FormDataRequest } from 'nestjs-form-data';
import { OrderDetailsService } from './order-details.service';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
@ApiTags('Order')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private orderDetailsService: OrderDetailsService,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }
  @Post('orderdetail')
  // @FormDataRequest()
  // @ApiConsumes('multipart/form-data')
  createOrderDetail(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailsService.create(createOrderDetailDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
