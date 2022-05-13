"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateVoucherDto = void 0;
var class_transformer_1 = require("class-transformer");
var swagger_1 = require("@nestjs/swagger");
var voucher_entity_1 = require("./../entities/voucher.entity");
var class_validator_1 = require("class-validator");
// import { VoucherType}
var CreateVoucherDto = /** @class */ (function () {
    function CreateVoucherDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ type: String })
    ], CreateVoucherDto.prototype, "code");
    __decorate([
        (0, class_validator_1.IsEnum)(voucher_entity_1.VoucherType),
        (0, swagger_1.ApiProperty)({ "enum": voucher_entity_1.VoucherType }),
        (0, class_validator_1.IsString)()
    ], CreateVoucherDto.prototype, "type");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String }),
        (0, class_validator_1.IsString)()
    ], CreateVoucherDto.prototype, "note");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Number
        }),
        (0, class_validator_1.IsNumber)()
    ], CreateVoucherDto.prototype, "discount");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Number
        }),
        (0, class_validator_1.IsNumber)()
    ], CreateVoucherDto.prototype, "max");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Number }),
        (0, class_validator_1.IsNumber)()
    ], CreateVoucherDto.prototype, "min");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: Number }),
        (0, class_validator_1.IsInt)()
    ], CreateVoucherDto.prototype, "quantity");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Type)(function () { return Date; })
    ], CreateVoucherDto.prototype, "startTime");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        (0, class_validator_1.IsDate)()
    ], CreateVoucherDto.prototype, "endTime");
    return CreateVoucherDto;
}());
exports.CreateVoucherDto = CreateVoucherDto;
