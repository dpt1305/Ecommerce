"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateOrderDto = void 0;
var class_transformer_1 = require("class-transformer");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var ItemOrder = /** @class */ (function () {
    function ItemOrder() {
    }
    return ItemOrder;
}());
var CreateOrderDto = /** @class */ (function () {
    function CreateOrderDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ type: String })
    ], CreateOrderDto.prototype, "userId");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({ type: String, required: false })
    ], CreateOrderDto.prototype, "voucherCode");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ type: String })
    ], CreateOrderDto.prototype, "addressShipping");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({ type: Number })
    ], CreateOrderDto.prototype, "shippingPrice");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: 'ItemOrder : {itemId : string, quantity : number}'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return ItemOrder; })
    ], CreateOrderDto.prototype, "items");
    return CreateOrderDto;
}());
exports.CreateOrderDto = CreateOrderDto;
