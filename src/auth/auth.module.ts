import { UsersModule } from './../users/users.module';
// import { UsersService } from './../users/users.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'thisismysecret',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
})
export class AuthModule {}
