"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateItemFlashsaleDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
// ApiProperty
var CreateItemFlashsaleDto = /** @class */ (function () {
    function CreateItemFlashsaleDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)()
    ], CreateItemFlashsaleDto.prototype, "discount");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsInt)()
    ], CreateItemFlashsaleDto.prototype, "quantity");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)()
    ], CreateItemFlashsaleDto.prototype, "flashsale");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)()
    ], CreateItemFlashsaleDto.prototype, "item");
    return CreateItemFlashsaleDto;
}());
exports.CreateItemFlashsaleDto = CreateItemFlashsaleDto;
