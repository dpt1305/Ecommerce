import { SendmailModule } from './../sendmail/sendmail.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from './../users/users.module';
// import { UsersService } from './../users/users.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'thisismysecret',
      signOptions: {
        expiresIn: '20m',
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    SendmailModule,
  ],
  // exports: [JwtStrategy],
})
export class AuthModule {}
