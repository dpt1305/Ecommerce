import { FormDataRequest } from 'nestjs-form-data';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseInterceptors,
  UploadedFile,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiConsumes('multipart/form-data')
  // @UseInterceptors(
  //   FileInterceptor('avatar', {
  //     storage: diskStorage({
  //       destination: './files',
  //       filename: function (req, file, cb) {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         cb(null, uniqueSuffix + '-' + file.originalname);
  //       },
  //     }),
  //     fileFilter: function (req, file, callback) {
  //       if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
  //         return callback(new Error('Only image files are allowed!'), false);
  //       }
  //       callback(null, true);
  //     },
  //   }),
  // )
  @Post()
  create(
    @Body() createUserDto: CreateUserDto,
    // @UploadedFile() avatar: Express.Multer.File,
  ) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiConsumes('multipart/form-data')
  // @FormDataRequest()
  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('avatar', {
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
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    try {
      return this.usersService.update(id, updateUserDto, avatar);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.usersService.remove(id);

    if (result.affected) {
      return `Remove id: ${id}`;
    } else {
      throw new BadRequestException();
    }
  }
}
