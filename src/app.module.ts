import { UsersRepository } from './users/users.repository';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SendGridModule } from '@anchan828/nest-sendgrid';
import { CategoriesModule } from './categories/categories.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { MulterModule } from '@nestjs/platform-express';
import { UploadsModule } from './uploads/uploads.module';
import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'ecommerce',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD,
        },
      },
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    SendGridModule.forRoot({
      apikey: process.env.SENDGRID_API_KEY,
    }),
    MulterModule.register({
      dest: './files',
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    NestjsFormDataModule,
    UploadsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
