"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var user_entity_1 = require("./../entities/user.entity");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)()
        // @IsNotEmpty()
        ,
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({ type: String, required: true })
    ], CreateUserDto.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)({ type: String }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsMobilePhone)('vi-VN')
    ], CreateUserDto.prototype, "phone");
    __decorate([
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({ type: String }),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateUserDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)({ type: String }),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateUserDto.prototype, "password");
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, swagger_1.ApiProperty)({ type: 'string', format: 'date' }),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Date; })
    ], CreateUserDto.prototype, "birthday");
    __decorate([
        (0, class_validator_1.IsEnum)(user_entity_1.Role),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({ "enum": user_entity_1.Role, "default": user_entity_1.Role.User })
    ], CreateUserDto.prototype, "role");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)()
    ], CreateUserDto.prototype, "address");
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
