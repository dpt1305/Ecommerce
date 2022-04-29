import { FlashsalesRepository } from './flashsales.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateFlashsaleDto } from './dto/create-flashsale.dto';
import { UpdateFlashsaleDto } from './dto/update-flashsale.dto';
import * as fs from 'fs-extra';

@Injectable()
export class FlashsalesService {
  constructor(
    @InjectRepository(FlashsalesRepository)
    private flashsalesRepository: FlashsalesRepository,
  ) {}
  async create(
    createFlashsaleDto: CreateFlashsaleDto,
    files: Array<Express.Multer.File>,
  ) {
    const images = files.map((element) => element.path);

    const flashSale = await this.flashsalesRepository.create({
      ...createFlashsaleDto,
      flashSaleBanner: images,
    });
    await this.flashsalesRepository.save(flashSale);

    return flashSale;
  }

  async findAll() {
    return await this.flashsalesRepository.find();
  }

  async findOne(id: string) {
    return await this.flashsalesRepository.findOne({ id });
  }

  async update(
    id: string,
    updateFlashsaleDto: UpdateFlashsaleDto,
    flashSaleBanner: Array<Express.Multer.File>,
  ) {
    const flashSale = await this.findOne(id);

    // remove old images
    flashSale.flashSaleBanner.forEach(element => {
      fs.exists(element, function (exists) {
        if (exists) {
          console.log('File exists. Deleting now ...');
          fs.unlinkSync(element);
        }
      });
    });

    //
    const images = flashSaleBanner.map((element) => element.path);
    return await this.flashsalesRepository.save({
      ...flashSale,
      ...updateFlashsaleDto,
      flashSaleBanner: images,
    });
  }

  async remove(id: string) {
    try {
      await this.flashsalesRepository.delete({ id });
      return `This action removes a #${id} flashsale`;
    } catch (error) {
      throw new Error(error);
    }
  }
}
