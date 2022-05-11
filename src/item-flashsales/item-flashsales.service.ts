import { FlashsalesService } from './../flashsales/flashsales.service';
import { ItemsService } from './../items/items.service';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemFlashsalesRepository } from './item-flashsales.repository';

import {
  Injectable,
  NotFoundException,
  BadRequestException,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateItemFlashsaleDto } from './dto/create-item-flashsale.dto';
import { UpdateItemFlashsaleDto } from './dto/update-item-flashsale.dto';

@Injectable()
export class ItemFlashsalesService {
  constructor(
    private itemsService: ItemsService,
    private flashsalesService: FlashsalesService,
    @InjectRepository(ItemFlashsalesRepository)
    private itemFlashsalesRepository: ItemFlashsalesRepository,
  ) {}
  async create(createItemFlashsaleDto: CreateItemFlashsaleDto) {
    const flashsale = await this.flashsalesService.findOne(
      createItemFlashsaleDto.flashsale,
    );
    const item = await this.itemsService.findOne(createItemFlashsaleDto.item);

    if (
      createItemFlashsaleDto.quantity > item.quantity ||
      createItemFlashsaleDto.quantity == 0
    ) {
      throw new BadRequestException('Quantity is not good.');
    }
    const quantity = item.quantity - createItemFlashsaleDto.quantity;
    await this.itemsService.update(item.id, { quantity }, null);

    const itemFlashsale = await this.itemFlashsalesRepository.create({
      ...createItemFlashsaleDto,
      flashsale,
      item,
    });
    return await this.itemFlashsalesRepository.save(itemFlashsale);
  }

  async findAll() {
    try {
      return await this.itemFlashsalesRepository.find();
    } catch (error) {
      throw new RequestTimeoutException();
    }
  }

  async findOne(id: string) {
    try {
      return await this.itemFlashsalesRepository.findOne({ id });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updateItemFlashsaleDto: UpdateItemFlashsaleDto) {
    try {
      const itemFlashsale = await this.findOne(id);
      console.log(itemFlashsale, updateItemFlashsaleDto);

      return await this.itemFlashsalesRepository.save({
        ...itemFlashsale,
        ...updateItemFlashsaleDto,
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async remove(id: string) {
    const result = await this.itemFlashsalesRepository.delete({ id });
    if (result.affected) {
      return `Delete item flashsale with id:${id} successfully`;
    } else {
      throw new NotFoundException();
    }
  }
}
