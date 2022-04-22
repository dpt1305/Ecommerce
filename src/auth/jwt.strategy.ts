import { UsersService } from './../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './../users/entities/user.entity';
import { UsersRepository } from './../users/users.repository';
import {
  Injectable,
  UnauthorizedException,
  NotAcceptableException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { InjectRepository}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      secretOrKey: 'thisismysecret',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload) {
    const email = payload.payload;
    const user: User = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }
    if (!user.verified) {
      throw new NotAcceptableException();
    }
    return user;
  }
}
