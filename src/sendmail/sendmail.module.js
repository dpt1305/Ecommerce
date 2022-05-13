"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SendmailModule = void 0;
// import { nodemailer } from 'nodemaler';
var common_1 = require("@nestjs/common");
var sendmail_service_1 = require("./sendmail.service");
var SendmailModule = /** @class */ (function () {
    function SendmailModule() {
    }
    SendmailModule = __decorate([
        (0, common_1.Module)({
            providers: [sendmail_service_1.SendmailService],
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
            exports: [sendmail_service_1.SendmailService]
        })
    ], SendmailModule);
    return SendmailModule;
}());
exports.SendmailModule = SendmailModule;
