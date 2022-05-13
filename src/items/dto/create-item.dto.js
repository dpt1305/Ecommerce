"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateItemDto = void 0;
var item_entity_1 = require("./../entities/item.entity");
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
// import { Column } from 'typeorm';
var CreateItemDto = /** @class */ (function () {
    function CreateItemDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, swagger_1.ApiProperty)()
    ], CreateItemDto.prototype, "name");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)()
    ], CreateItemDto.prototype, "barcode");
    __decorate([
        (0, class_validator_1.IsNumberString)(),
        (0, swagger_1.ApiProperty)({ type: 'number', format: 'float' }),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateItemDto.prototype, "importPrice");
    __decorate([
        (0, class_validator_1.IsNumberString)(),
        (0, swagger_1.ApiProperty)({ type: 'number', format: 'float' }),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateItemDto.prototype, "price");
    __decorate([
        (0, class_validator_1.IsNumberString)(),
        (0, swagger_1.ApiProperty)({ type: 'number', format: 'float' }),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateItemDto.prototype, "weight");
    __decorate([
        (0, class_validator_1.IsNumberString)(),
        (0, swagger_1.ApiProperty)({ type: 'integer' }),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateItemDto.prototype, "quantity");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)()
    ], CreateItemDto.prototype, "description");
    __decorate([
        (0, class_validator_1.IsEnum)(item_entity_1.ItemStatus),
        (0, swagger_1.ApiProperty)({ "enum": item_entity_1.ItemStatus }),
        (0, class_validator_1.IsOptional)()
    ], CreateItemDto.prototype, "status");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' })
    ], CreateItemDto.prototype, "itemAvatar");
    return CreateItemDto;
}());
exports.CreateItemDto = CreateItemDto;
