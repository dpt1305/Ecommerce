"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemFlashsale = void 0;
var order_detail_entity_1 = require("./../../orders/entities/order-detail.entity");
var item_entity_1 = require("./../../items/entities/item.entity");
var flashsale_entity_1 = require("./../../flashsales/entities/flashsale.entity");
var typeorm_1 = require("typeorm");
var ItemFlashsale = /** @class */ (function () {
    function ItemFlashsale() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], ItemFlashsale.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('float')
    ], ItemFlashsale.prototype, "discount");
    __decorate([
        (0, typeorm_1.Column)('int')
    ], ItemFlashsale.prototype, "quantity");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return flashsale_entity_1.Flashsale; }, function (flashsale) { return flashsale.itemFlashsale; })
    ], ItemFlashsale.prototype, "flashsale");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return item_entity_1.Item; }, function (item) { return item.itemFlashsale; })
    ], ItemFlashsale.prototype, "item");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return order_detail_entity_1.OrderDetail; }, function (orderDetail) { return orderDetail.itemFlashsale; })
    ], ItemFlashsale.prototype, "orderDetail");
    ItemFlashsale = __decorate([
        (0, typeorm_1.Entity)()
    ], ItemFlashsale);
    return ItemFlashsale;
}());
exports.ItemFlashsale = ItemFlashsale;
