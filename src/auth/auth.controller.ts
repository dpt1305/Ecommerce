import { CreateUserDto } from './../users/dto/create-user.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './../users/users.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    // const account = await this.usersService.create(createUserDto);
    // return this.authService.verifyEmail(account.email, account.name);
  }

  @Post('signin')
  signIn(@Body() createAuthDto: CreateAuthDto) {
    // return this.authService.signIn(createAuthDto);
  }
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('test')
  test() {
    // return 'this is test for authen';
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
