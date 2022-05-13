"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Item = exports.ItemStatus = void 0;
var order_detail_entity_1 = require("./../../orders/entities/order-detail.entity");
var item_flashsale_entity_1 = require("./../../item-flashsales/entities/item-flashsale.entity");
var image_item_entity_1 = require("./image-item.entity");
var typeorm_1 = require("typeorm");
var category_entity_1 = require("../../categories/entities/category.entity");
var ItemStatus;
(function (ItemStatus) {
    ItemStatus["Active"] = "Active";
    ItemStatus["Inactive"] = "Inactive";
})(ItemStatus = exports.ItemStatus || (exports.ItemStatus = {}));
var Item = /** @class */ (function () {
    function Item() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], Item.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Item.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Item.prototype, "barcode");
    __decorate([
        (0, typeorm_1.Column)('float')
    ], Item.prototype, "importPrice");
    __decorate([
        (0, typeorm_1.Column)('float')
    ], Item.prototype, "price");
    __decorate([
        (0, typeorm_1.Column)('float')
    ], Item.prototype, "weight");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Item.prototype, "avatar");
    __decorate([
        (0, typeorm_1.Column)('int')
    ], Item.prototype, "quantity");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Item.prototype, "description");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": ItemStatus,
            "default": ItemStatus.Active
        })
    ], Item.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)('boolean')
    ], Item.prototype, "isSale");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; }
        })
    ], Item.prototype, "created_at");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)'
        })
    ], Item.prototype, "modified_at");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (_) { return category_entity_1.Category; }, function (category) { return category.item; })
    ], Item.prototype, "category");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return image_item_entity_1.ImageItem; }, function (imageItem) { return imageItem.item; })
    ], Item.prototype, "imageItem");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return item_flashsale_entity_1.ItemFlashsale; }, function (itemFlashsale) { return itemFlashsale.item; })
    ], Item.prototype, "itemFlashsale");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return order_detail_entity_1.OrderDetail; }, function (orderDetail) { return orderDetail.item; })
    ], Item.prototype, "orderDetail");
    Item = __decorate([
        (0, typeorm_1.Entity)()
    ], Item);
    return Item;
}());
exports.Item = Item;
