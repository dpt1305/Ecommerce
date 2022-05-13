"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderDetail = void 0;
var order_entity_1 = require("./order.entity");
var item_flashsale_entity_1 = require("./../../item-flashsales/entities/item-flashsale.entity");
var item_entity_1 = require("./../../items/entities/item.entity");
var typeorm_1 = require("typeorm");
var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], OrderDetail.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('int')
    ], OrderDetail.prototype, "quantity");
    __decorate([
        (0, typeorm_1.Column)('float')
    ], OrderDetail.prototype, "price");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return item_entity_1.Item; }, function (item) { return item.orderDetail; })
    ], OrderDetail.prototype, "item");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return item_flashsale_entity_1.ItemFlashsale; }, function (itemFlashsale) { return itemFlashsale.orderDetail; })
    ], OrderDetail.prototype, "itemFlashsale");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return order_entity_1.Order; }, function (order) { return order.orderDetail; })
    ], OrderDetail.prototype, "order");
    OrderDetail = __decorate([
        (0, typeorm_1.Entity)()
    ], OrderDetail);
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
