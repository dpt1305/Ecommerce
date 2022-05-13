"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ImageItem = void 0;
var item_entity_1 = require("./item.entity");
var typeorm_1 = require("typeorm");
var ImageItem = /** @class */ (function () {
    function ImageItem() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], ImageItem.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ImageItem.prototype, "url");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return item_entity_1.Item; }, function (item) { return item.imageItem; })
    ], ImageItem.prototype, "item");
    ImageItem = __decorate([
        (0, typeorm_1.Entity)()
    ], ImageItem);
    return ImageItem;
}());
exports.ImageItem = ImageItem;
