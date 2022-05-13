"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Voucher = exports.VoucherType = void 0;
var order_entity_1 = require("./../../orders/entities/order.entity");
var typeorm_1 = require("typeorm");
var VoucherType;
(function (VoucherType) {
    VoucherType["Discount"] = "Discount";
    VoucherType["Shipping"] = "Shipping";
})(VoucherType = exports.VoucherType || (exports.VoucherType = {}));
var Voucher = /** @class */ (function () {
    function Voucher() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], Voucher.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Voucher.prototype, "code");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Voucher.prototype, "type");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Voucher.prototype, "note");
    __decorate([
        (0, typeorm_1.Column)('float')
    ], Voucher.prototype, "discount");
    __decorate([
        (0, typeorm_1.Column)('float')
    ], Voucher.prototype, "max");
    __decorate([
        (0, typeorm_1.Column)('float')
    ], Voucher.prototype, "min");
    __decorate([
        (0, typeorm_1.Column)('int')
    ], Voucher.prototype, "quantity");
    __decorate([
        (0, typeorm_1.Column)('timestamp')
    ], Voucher.prototype, "startTime");
    __decorate([
        (0, typeorm_1.Column)('timestamp')
    ], Voucher.prototype, "endTime");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return order_entity_1.Order; }, function (order) { return order.voucher; })
    ], Voucher.prototype, "order");
    Voucher = __decorate([
        (0, typeorm_1.Entity)()
    ], Voucher);
    return Voucher;
}());
exports.Voucher = Voucher;
