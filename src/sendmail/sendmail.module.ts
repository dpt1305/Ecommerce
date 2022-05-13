// import { nodemailer } from 'nodemaler';
import { Module } from '@nestjs/common';
import { SendmailService } from './sendmail.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  providers: [SendmailService],
  imports: [
    // MailerModule.forRoot({
    //   transport: {
    //     // nodemailer.createTransport({
    //     service: 'gmail',
    //     // host: 'smtp.gmail.com',
    //     transport: 'smtp.gmail.com',
    //     port: 587,
    //     auth: {
    //       user: process.env.USER,
    //       pass: process.env.PASSWORD,
    //     },
    //   },
    //   // defaults: {
    //   //   from: '"nest-modules" <modules@nestjs.com>',
    //   // },
    // }),
  ],
  exports: [SendmailService],
})
export class SendmailModule {}
