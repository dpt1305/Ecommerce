"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ItemFlashsalesController = void 0;
var swagger_1 = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var ItemFlashsalesController = /** @class */ (function () {
    function ItemFlashsalesController(itemFlashsalesService) {
        this.itemFlashsalesService = itemFlashsalesService;
    }
    ItemFlashsalesController.prototype.create = function (createItemFlashsaleDto) {
        try {
            return this.itemFlashsalesService.create(createItemFlashsaleDto);
        }
        catch (error) {
            throw new common_1.RequestTimeoutException();
        }
    };
    ItemFlashsalesController.prototype.findAll = function () {
        return this.itemFlashsalesService.findAll();
    };
    ItemFlashsalesController.prototype.findOne = function (id) {
        return this.itemFlashsalesService.findOne(id);
    };
    ItemFlashsalesController.prototype.update = function (id, updateItemFlashsaleDto) {
        return this.itemFlashsalesService.update(id, updateItemFlashsaleDto);
    };
    ItemFlashsalesController.prototype.remove = function (id) {
        return this.itemFlashsalesService.remove(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ItemFlashsalesController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], ItemFlashsalesController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ItemFlashsalesController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ItemFlashsalesController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ItemFlashsalesController.prototype, "remove");
    ItemFlashsalesController = __decorate([
        (0, common_1.Controller)('item-flashsales'),
        (0, swagger_1.ApiTags)('Item Flashsale')
    ], ItemFlashsalesController);
    return ItemFlashsalesController;
}());
exports.ItemFlashsalesController = ItemFlashsalesController;
