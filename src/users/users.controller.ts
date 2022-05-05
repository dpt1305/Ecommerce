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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { User } from './entities/user.entity';
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @FormDataRequest()
  @ApiConsumes('multipart/form-data')
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    // return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    // return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // try {
    //   const result = await this.usersService.update(id, updateUserDto);
    //   if (result == 1) {
    //     return {
    //       statusCode: 200,
    //       message: 'Success',
    //     };
    //   }
    // } catch (error) {
    //   return {
    //     statusCode: 500,
    //     message: 'Fail to update',
    //   };
    // }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // try {
    //   const result = await this.usersService.remove(id);
    //   console.log(result);
    //   if (result) {
    //     return {
    //       statusCode: 200,
    //       message: 'Success',
    //     };
    //   }
    //   return {
    //     statusCode: 500,
    //     message: 'Fail to update',
    //   };
    // } catch (error) {
    //   throw new Error(error);
    // }
  }
}
