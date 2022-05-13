"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Order = exports.OrderStatus = void 0;
var order_detail_entity_1 = require("./order-detail.entity");
var voucher_entity_1 = require("./../../vouchers/entities/voucher.entity");
var user_entity_1 = require("./../../users/entities/user.entity");
var typeorm_1 = require("typeorm");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Waiting"] = "Waiting";
    OrderStatus["Delivering"] = "Delivering";
    OrderStatus["Canceled"] = "Canceled";
    OrderStatus["Closed"] = "Closed";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], Order.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": OrderStatus,
            "default": OrderStatus.Waiting
        })
    ], Order.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)('float')
    ], Order.prototype, "shippingPrice");
    __decorate([
        (0, typeorm_1.Column)({ type: 'float', nullable: true })
    ], Order.prototype, "itemsPrice");
    __decorate([
        (0, typeorm_1.Column)({ type: 'float', nullable: true })
    ], Order.prototype, "total");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Order.prototype, "addressShipping");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; }
        })
    ], Order.prototype, "created_at");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)'
        })
    ], Order.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.order; })
    ], Order.prototype, "user");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return voucher_entity_1.Voucher; }, function (voucher) { return voucher.order; })
    ], Order.prototype, "voucher");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return order_detail_entity_1.OrderDetail; }, function (orderDetail) { return orderDetail.order; })
    ], Order.prototype, "orderDetail");
    Order = __decorate([
        (0, typeorm_1.Entity)()
    ], Order);
    return Order;
}());
exports.Order = Order;
