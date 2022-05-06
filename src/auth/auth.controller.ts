import { SendmailService } from './../sendmail/sendmail.service';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { ApiTags, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
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
import { FormDataRequest } from 'nestjs-form-data';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import * as speakeasy from 'speakeasy';
// SendmailService
@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private usersService: UsersService,
    private sendmailService: SendmailService,
  ) {}

  @ApiConsumes('multipart/form-data')
  @FormDataRequest()
  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    const account = await this.usersService.create(createUserDto);
    console.log(account.email, account.id);
    const token = speakeasy.totp({
      secret: account.id,
      encoding: 'base32',
    });
    console.log(token);
    const tokenValidates = speakeasy.totp.verify({
      secret: account.id,
      encoding: 'base32',
      token: token,
      window: 4,
    });
    console.log(tokenValidates);
    
    this.sendmailService.sendVerifiedEmail(account.email, token);
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
