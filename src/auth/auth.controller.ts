import { ForgetPasswordDto } from './dto/forget-password.dto';
import { Role } from './../users/entities/user.entity';
import { Roles } from './../authorization/roles.decorator';
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
  Query,
  Param,
  Delete,
  UseGuards,
  NotAcceptableException,
  BadRequestException,
  RequestTimeoutException,
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
    const token = await this.authService.generateOTP(account.id);

    this.sendmailService.sendVerifiedEmail(account.email, token);
    return account;
  }

  @Get('verifyemail/?')
  async verifyEmail(@Query('email') email: string, @Query('otp') otp: string) {
    try {
      const user = await this.usersService.findByEmail(email);
      const result = await this.authService.verifyOTP(user.id, otp);

      if (result) {
        await this.usersService.verifyEmail(user.id);
        return `Verify email successfully.`;
      }
      throw new BadRequestException('OTP is incorrect.');
    } catch (error) {
      throw new BadRequestException('OTP is incorrect.');
    }
  }
  @Get('requestforgetpassword/?')
  async requestForgetPassword(@Query('email') email: string) {
    try {
      const user = await this.usersService.findByEmail(email);
      const otp = await this.authService.generateOTP(user.id);
      
      await this.sendmailService.sendForgetPassword(user.email, otp);

    } catch (error) {
      throw new RequestTimeoutException();
    }
  }

  @Post('signin')
  signIn(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signIn(createAuthDto);
  }

  @Post('forgetpassword')
  async forgetPassword(@Body() forgetPasswordDto: ForgetPasswordDto) {
    try {
      const { email, newPassword, otp } = forgetPasswordDto;
      const user = await this.usersService.findByEmail(email);

      const result = await this.authService.verifyOTP(user.id, otp);
      if (result) {
        this.usersService.updatePassword( email, newPassword )
        return `Reset password sucessfully.`;
      }

      throw new BadRequestException('OTP is incorrect.');
    } catch (error) {
      throw new BadRequestException('Can not reset password.');
    }
  }



  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Roles(Role.User)
  @Get('test')
  test() {
    return 'this is test for authen';
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
