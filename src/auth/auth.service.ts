import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(createAuthDto: CreateAuthDto) {
    console.log('asdfdfs');
    const { email, password } = createAuthDto;
    const account = await this.usersService.findByEmail(email);
    const check = await bcrypt.compare(password, account.password);
    console.log(check);
    if (!account || !check) {
      return 'Email or password is incorrect';
    }
    const payload = account.email;
    const access_token: string = await this.jwtService.sign({ payload });
    return `jwt: ${access_token}`;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
