import { Voucher, VoucherType } from './entities/voucher.entity';
import { VouchersRepository } from './vouchers.repository';
import { Injectable } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { NotFoundException, BadRequestException } from '@nestjs/common';
@Injectable()
export class VouchersService {
  constructor(private vouchersRepository: VouchersRepository) {}
  async create(createVoucherDto: CreateVoucherDto) {
    try {
      const voucher = await this.vouchersRepository.create({
        ...createVoucherDto,
      });
      return this.vouchersRepository.save(voucher);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll() {
    try {
      return await this.vouchersRepository.find();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findOne(id: string) {
    try {
      return await this.vouchersRepository.findOne({ id });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updateVoucherDto: UpdateVoucherDto) {
    try {
      const voucher = await this.findOne(id);
      console.log(voucher);
      return await this.vouchersRepository.save({
        ...voucher,
        ...updateVoucherDto,
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async remove(id: string) {
    const result = await this.vouchersRepository.delete({ id });
    if (result) return `Delete voucher with id: ${id}`;
    else {
      throw new NotFoundException();
    }
  }
  async findVoucherByCode(code: string) {
    let voucher = await this.vouchersRepository.findOne({ code });
    
    return voucher;
  }

  async applyVoucher(
    voucher: Voucher,
    itemsPrice: number,
    shippingPrice: number,
  ) {
    if (voucher.quantity == 0 || itemsPrice <= voucher.min) {
      throw new BadRequestException('Can not apply this voucher');
    }

    if(voucher.type === VoucherType.Shipping) {
      const ship = (1 - voucher.discount) * shippingPrice;
      shippingPrice = ship > voucher.max ? shippingPrice - voucher.max : ship;
    }

    if(voucher.type == VoucherType.Discount) {
      const discount = (1 - voucher.discount) * itemsPrice;
      itemsPrice = discount > voucher.max ? itemsPrice - voucher.max : discount;
    }
    await this.vouchersRepository.save({
      ...voucher,
      quantity: voucher.quantity - 1,
    });
    
    return { itemsPrice, shippingPrice };
  }
}
