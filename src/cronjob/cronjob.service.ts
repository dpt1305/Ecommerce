import { ItemsService } from './../items/items.service';
import { Item } from './../items/entities/item.entity';
import { ItemFlashsale } from './../item-flashsales/entities/item-flashsale.entity';
import { getConnection } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
// import { getConnection}
@Injectable()
export class CronjobService {
  private readonly logger = new Logger(CronjobService.name);
  constructor(
    private itemsService: ItemsService,
  ) {}

  @Cron('*/20 * * * *', {
    name: 'checkIsSaleItems',
    timeZone: 'Asia/Ho_Chi_Minh',
  })
  async checkIsSaleItems() {
    const items = await this.itemsService.findAll();
    console.log(items);
    
    const timeNow = new Date();
    for (let index = 0; index < items.length; index++) {
      let itemId = (items[index].id);
      
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
      console.log(query);

      if( query[0] ) {
        await this.itemsService.updateIsSaleTrue(itemId);
      }
      else {
        await this.itemsService.updateIsSaleFalse(itemId);
      }
      
    }
  }
}
