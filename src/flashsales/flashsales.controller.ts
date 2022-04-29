import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FlashsalesService } from './flashsales.service';
import { CreateFlashsaleDto } from './dto/create-flashsale.dto';
import { UpdateFlashsaleDto } from './dto/update-flashsale.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('flashsales')
@ApiTags('Flash Sale')
@ApiConsumes('multipart/form-data')
export class FlashsalesController {
  constructor(private readonly flashsalesService: FlashsalesService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('flashSaleBanner', 20, {
      storage: diskStorage({
        destination: './files',
        filename: function (req, file, cb) {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + '-' + file.originalname);
        },
      }),
      fileFilter: function (req, file, callback) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
    }),
  )
  create(
    @Body() createFlashsaleDto: CreateFlashsaleDto,
    @UploadedFiles() flashSaleBanner: Array<Express.Multer.File>,
  ) {
    return this.flashsalesService.create(createFlashsaleDto, flashSaleBanner);
  }

  @Get()
  findAll() {
    return this.flashsalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flashsalesService.findOne(id);
  }

  @ApiConsumes('multipart/form-data')
  @Patch(':id')
  @UseInterceptors(
    FilesInterceptor('flashSaleBanner', 20, {
      storage: diskStorage({
        destination: './files',
        filename: function (req, file, cb) {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + '-' + file.originalname);
        },
      }),
      fileFilter: function (req, file, callback) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateFlashsaleDto: UpdateFlashsaleDto,
    @UploadedFiles() flashSaleBanner: Array<Express.Multer.File>,
  ) {
    return this.flashsalesService.update(
      id,
      updateFlashsaleDto,
      flashSaleBanner,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flashsalesService.remove(id);
  }
}
