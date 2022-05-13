"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCategoryDto = void 0;
var category_entity_1 = require("./../entities/category.entity");
var class_validator_1 = require("class-validator");
// import { CategoryStatus
var CreateCategoryDto = /** @class */ (function () {
    function CreateCategoryDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateCategoryDto.prototype, "name");
    __decorate([
        (0, class_validator_1.IsEnum)(category_entity_1.CategoryStatus),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateCategoryDto.prototype, "status");
    return CreateCategoryDto;
}());
exports.CreateCategoryDto = CreateCategoryDto;
