import { ApiTags, ApiBody, ApiConsumes } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemFlashsalesService } from './item-flashsales.service';
import { CreateItemFlashsaleDto } from './dto/create-item-flashsale.dto';
import { UpdateItemFlashsaleDto } from './dto/update-item-flashsale.dto';

@Controller('item-flashsales')
@ApiTags('Item Flashsale')
export class ItemFlashsalesController {
  constructor(private readonly itemFlashsalesService: ItemFlashsalesService) {}

  @Post()
  create(@Body() createItemFlashsaleDto: CreateItemFlashsaleDto) {
    return this.itemFlashsalesService.create(createItemFlashsaleDto);
  }

  @Get()
  findAll() {
    return this.itemFlashsalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemFlashsalesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemFlashsaleDto: UpdateItemFlashsaleDto,
  ) {
    return this.itemFlashsalesService.update(id, updateItemFlashsaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemFlashsalesService.remove(id);
  }
}
