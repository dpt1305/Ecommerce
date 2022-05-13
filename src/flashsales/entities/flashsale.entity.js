"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Flashsale = void 0;
var item_flashsale_entity_1 = require("./../../item-flashsales/entities/item-flashsale.entity");
var typeorm_1 = require("typeorm");
var Flashsale = /** @class */ (function () {
    function Flashsale() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], Flashsale.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Flashsale.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Flashsale.prototype, "description");
    __decorate([
        (0, typeorm_1.Column)('timestamp')
    ], Flashsale.prototype, "startSale");
    __decorate([
        (0, typeorm_1.Column)('timestamp')
    ], Flashsale.prototype, "endSale");
    __decorate([
        (0, typeorm_1.Column)('text', { array: true })
    ], Flashsale.prototype, "flashSaleBanner");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return item_flashsale_entity_1.ItemFlashsale; }, function (itemFlashsale) { return itemFlashsale.flashsale; })
    ], Flashsale.prototype, "itemFlashsale");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; }
        })
    ], Flashsale.prototype, "created_at");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)'
        })
    ], Flashsale.prototype, "updated_at");
    Flashsale = __decorate([
        (0, typeorm_1.Entity)()
    ], Flashsale);
    return Flashsale;
}());
exports.Flashsale = Flashsale;
