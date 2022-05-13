"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var typeorm_1 = require("@nestjs/typeorm");
var common_1 = require("@nestjs/common");
var users_service_1 = require("./users.service");
var users_controller_1 = require("./users.controller");
var nestjs_form_data_1 = require("nestjs-form-data");
var users_repository_1 = require("./users.repository");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        (0, common_1.Module)({
            controllers: [users_controller_1.UsersController],
            providers: [users_service_1.UsersService],
            imports: [typeorm_1.TypeOrmModule.forFeature([users_repository_1.UsersRepository]), nestjs_form_data_1.NestjsFormDataModule],
            exports: [users_service_1.UsersService]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
