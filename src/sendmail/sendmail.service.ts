import { Flashsale } from './../flashsales/entities/flashsale.entity';
import { createTransport } from 'nodemailer';
import { verify } from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { google } from 'googleapis';
import { MailerService } from '@nestjs-modules/mailer';
import * as axios from 'axios';
@Injectable()
export class SendmailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendVerifiedEmail(email: string, token: string) {
    this.mailerService
      .sendMail({
        to: `${email}`, // list of receivers
        from: 'bot.sendmail.99@gmail.com', // sender address
        subject: 'Verify your email', // Subject line
        text: `Your OTP: ${token}`, // plaintext body
        // html: '<h1>welcome</h1>', // HTML body content
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async sendForgetPassword(email: string, token: string) {
    this.mailerService.sendMail({
        to: email, // list of receivers
        from: 'bot.sendmail.99@gmail.com', // sender address
        subject: 'Forget password', // Subject line
        text: `You want to reset your password. This is your OTP: ${token}.\nPlease don't share this code for anyone.`, // plaintext body
        // html: '<h1>welcome</h1>', // HTML body content
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    async sendNotification(email: string, flashsale: Flashsale) {
      this.mailerService.sendMail({
          to: `${email}`, // list of receivers
          from: 'bot.sendmail.99@gmail.com', // sender address
          subject: 'Flashsale notification', // Subject line
          text: `Welcome to flashsale: ${flashsale.name}.\n This flashsale start from: ${flashsale.startSale} to ${flashsale.endSale} `,
          // html: '<h1>welcome</h1>', // HTML body content
        })
        .then((success) => {
          console.log(success);
        })
        .catch((err) => {
          console.log(err);
        });
      
    }
  }
  