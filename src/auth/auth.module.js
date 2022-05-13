"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var sendmail_module_1 = require("./../sendmail/sendmail.module");
// import { TypeOrmModule } from '@nestjs/typeorm';
var jwt_strategy_1 = require("./jwt.strategy");
var users_module_1 = require("./../users/users.module");
// import { UsersService } from './../users/users.service';
var common_1 = require("@nestjs/common");
var auth_service_1 = require("./auth.service");
var auth_controller_1 = require("./auth.controller");
var jwt_1 = require("@nestjs/jwt");
var nestjs_form_data_1 = require("nestjs-form-data");
var passport_1 = require("@nestjs/passport");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            controllers: [auth_controller_1.AuthController],
            providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
            imports: [
                users_module_1.UsersModule,
                jwt_1.JwtModule.register({
                    secret: 'thisismysecret',
                    signOptions: {
                        expiresIn: '20m'
                    }
                }),
                passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
                sendmail_module_1.SendmailModule,
                nestjs_form_data_1.NestjsFormDataModule,
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
