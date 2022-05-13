"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ImagesUploadDto = exports.AvatarUploadDto = exports.FileUploadDto = void 0;
var swagger_1 = require("@nestjs/swagger");
// import { ApiProperty}
var FileUploadDto = /** @class */ (function () {
    function FileUploadDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' })
    ], FileUploadDto.prototype, "file");
    return FileUploadDto;
}());
exports.FileUploadDto = FileUploadDto;
var AvatarUploadDto = /** @class */ (function () {
    function AvatarUploadDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' })
    ], AvatarUploadDto.prototype, "avatar");
    return AvatarUploadDto;
}());
exports.AvatarUploadDto = AvatarUploadDto;
var ImagesUploadDto = /** @class */ (function () {
    function ImagesUploadDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: 'array', items: { type: 'string', format: 'binary' } })
    ], ImagesUploadDto.prototype, "images");
    return ImagesUploadDto;
}());
exports.ImagesUploadDto = ImagesUploadDto;
