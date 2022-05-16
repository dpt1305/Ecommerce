import { ItemFlashsale } from './../item-flashsales/entities/item-flashsale.entity';
import { IsOptional } from 'class-validator';
import { DecreaseItemDto } from './dto/decrease-item.dto';
import { Item } from './entities/item.entity';
import { ImageItem } from './entities/image-item.entity';
import { ImageItemRepository } from './image-item.repository';
import { Category } from './../categories/entities/category.entity';
import { CategoriesService } from './../categories/categories.service';
import { ItemsRepository } from './items.repository';
import { ApiTags, ApiBody, ApiConsumes } from '@nestjs/swagger';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs-extra';
import { diskStorage } from 'multer';
import { getConnection } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    private categoriesService: CategoriesService,
    @InjectRepository(ItemsRepository)
    private itemsRepository: ItemsRepository,
    @InjectRepository(ImageItemRepository)
    private imageItemRepository: ImageItemRepository,
  ) {}
  async create(createItemDto: CreateItemDto, categoryId: string, files: any) {
    const category = await this.categoriesService.findOne(categoryId);

    if( !(files.avatar && files.images) ) {
      throw new BadRequestException('Must post avatar and images.');
    }

    const newItem = await this.itemsRepository.create({
      ...createItemDto,
      avatar: files.avatar[0].path,
      category,
      isSale: false,
    });
    await this.itemsRepository.save(newItem);

    files.images.forEach(async (element, index) => {
      const newImageItem = await this.imageItemRepository.create({
        url: element.path,
        item: newItem,
      });
      await this.imageItemRepository.save(newImageItem);
    });

    return newItem;
  }

  async findAll() {
    return await this.itemsRepository.find();
  }

  async findOne(id: string) {
    const item = await this.itemsRepository.findOne({ id });
    if (!item) throw new NotFoundException('Not found item');
    return item;
  }

  async update(
    id: string,
    updateItemDto: UpdateItemDto,
    file: Express.Multer.File,
  ) {
    const item = await this.itemsRepository.findOne({ id });

    if (item.avatar && file) {
      fs.remove(item.avatar, async (err) => {
        if (err) throw new Error('Can not update avatar');

        const update = { ...item, ...updateItemDto, avatar: file.path };
        await this.itemsRepository.save(update);
        return update;
      });
    }
    const avatar = file ? file.path : item.avatar;
    const update = { ...item, ...updateItemDto, avatar };
    await this.itemsRepository.save(update);
    return update;
  }
  async updateQuantityAfterFlashsale(id: string, quantity: number) {
    const item = await this.findOne(id);
    console.log(item);
    
    const update = {
      ...item,
      quantity: item.quantity + quantity,
    };
    await this.itemsRepository.save(update);
  }

  async remove(id: string) {
    try {
      await this.itemsRepository
        .createQueryBuilder()
        .delete()
        .from(ImageItem)
        .where('item = :id', { id })
        .execute();
      await this.itemsRepository
        .createQueryBuilder()
        .delete()
        .from(Item)
        .where('id = :id', { id })
        .execute();
      return 'Remove successfully.';
    } catch (error) {
      throw new Error('Can not delete.');
    }
  }

  async decreaseItemQuantity(id: string, decreaseItemDto: DecreaseItemDto) {
    const item = await this.findOne(id);

    const { orderNumber } = decreaseItemDto;

    if (item.quantity < orderNumber) {
      throw new BadRequestException(
        'Order number is bigger than quantity of item',
      );
    }
    item.quantity -= orderNumber;
    return await this.itemsRepository.save(item);
  }

  async getItemWithFlashsale(itemId: string) {
    const timeNow = new Date();
    const query = await getConnection()
      .createQueryBuilder()
      .select('item')
      .addSelect('item_flashsale')
      .addSelect('flashsale')
      .addSelect('item.price', 'price')
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
    return query[0];
  }

  async updateIsSaleTrue (id: string) {
    let item = await this.findOne( id );
    if( !item.isSale ) {
      await this.itemsRepository.save({
        ...item,
        isSale: true,
      })
    }
  }
  async updateIsSaleFalse (id: string) {
    let item = await this.findOne( id );
    if (item.isSale) {
      await this.itemsRepository.save({
        ...item,
        isSale: false,
      })
    }
  }
}
