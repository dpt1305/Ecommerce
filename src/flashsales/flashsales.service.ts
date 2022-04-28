import { Injectable } from '@nestjs/common';
import { CreateFlashsaleDto } from './dto/create-flashsale.dto';
import { UpdateFlashsaleDto } from './dto/update-flashsale.dto';

@Injectable()
export class FlashsalesService {
  create(createFlashsaleDto: CreateFlashsaleDto) {
    return 'This action adds a new flashsale';
  }

  findAll() {
    return `This action returns all flashsales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flashsale`;
  }

  update(id: number, updateFlashsaleDto: UpdateFlashsaleDto) {
    return `This action updates a #${id} flashsale`;
  }

  remove(id: number) {
    return `This action removes a #${id} flashsale`;
  }
}
