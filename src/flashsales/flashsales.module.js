"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FlashsalesModule = void 0;
var typeorm_1 = require("@nestjs/typeorm");
var flashsales_repository_1 = require("./flashsales.repository");
var common_1 = require("@nestjs/common");
var flashsales_service_1 = require("./flashsales.service");
var flashsales_controller_1 = require("./flashsales.controller");
var FlashsalesModule = /** @class */ (function () {
    function FlashsalesModule() {
    }
    FlashsalesModule = __decorate([
        (0, common_1.Module)({
            controllers: [flashsales_controller_1.FlashsalesController],
            providers: [flashsales_service_1.FlashsalesService],
            imports: [typeorm_1.TypeOrmModule.forFeature([flashsales_repository_1.FlashsalesRepository])],
            exports: [flashsales_service_1.FlashsalesService]
        })
    ], FlashsalesModule);
    return FlashsalesModule;
}());
exports.FlashsalesModule = FlashsalesModule;
