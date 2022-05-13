"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Category = exports.CategoryStatus = void 0;
var item_entity_1 = require("./../../items/entities/item.entity");
var category_banner_entity_1 = require("./category-banner.entity");
var typeorm_1 = require("typeorm");
var CategoryStatus;
(function (CategoryStatus) {
    CategoryStatus["Inactive"] = "Inactive";
    CategoryStatus["Active"] = "Active";
})(CategoryStatus = exports.CategoryStatus || (exports.CategoryStatus = {}));
var Category = /** @class */ (function () {
    function Category() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], Category.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ unique: true })
    ], Category.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": CategoryStatus,
            "default": CategoryStatus.Active
        })
    ], Category.prototype, "status");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return item_entity_1.Item; }, function (item) { return item.category; })
    ], Category.prototype, "item");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return category_banner_entity_1.CategoryBanner; }, function (categoryBanner) { return categoryBanner.category; })
    ], Category.prototype, "categoryBanner");
    Category = __decorate([
        (0, typeorm_1.Entity)()
    ], Category);
    return Category;
}());
exports.Category = Category;
