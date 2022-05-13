"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryBanner = void 0;
var category_entity_1 = require("./category.entity");
var typeorm_1 = require("typeorm");
var CategoryBanner = /** @class */ (function () {
    function CategoryBanner() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], CategoryBanner.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], CategoryBanner.prototype, "position");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], CategoryBanner.prototype, "url");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return category_entity_1.Category; }, function (category) { return category.categoryBanner; })
    ], CategoryBanner.prototype, "category");
    CategoryBanner = __decorate([
        (0, typeorm_1.Entity)()
    ], CategoryBanner);
    return CategoryBanner;
}());
exports.CategoryBanner = CategoryBanner;
