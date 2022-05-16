import { ApiTags, ApiBody, ApiConsumes } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  RequestTimeoutException,
} from '@nestjs/common';
import { ItemFlashsalesService } from './item-flashsales.service';
import { CreateItemFlashsaleDto } from './dto/create-item-flashsale.dto';
import { UpdateItemFlashsaleDto } from './dto/update-item-flashsale.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './../authorization/roles.guard';
import { Role } from './../users/entities/user.entity';
@Controller('item-flashsales')
@ApiTags('Item Flashsale')
export class ItemFlashsalesController {
  constructor(private readonly itemFlashsalesService: ItemFlashsalesService) {}

  @Post()
  create(@Body() createItemFlashsaleDto: CreateItemFlashsaleDto) {
    try {
      return this.itemFlashsalesService.create(createItemFlashsaleDto);
    } catch (error) {
      throw new RequestTimeoutException();
    }
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
