import { SendmailModule } from './../sendmail/sendmail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { UsersRepository } from './users.repository';
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([UsersRepository]), NestjsFormDataModule],
  exports: [UsersService],
})
export class UsersModule {}
