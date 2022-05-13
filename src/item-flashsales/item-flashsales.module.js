"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemFlashsalesModule = void 0;
var flashsales_module_1 = require("./../flashsales/flashsales.module");
var items_module_1 = require("./../items/items.module");
var item_flashsales_repository_1 = require("./item-flashsales.repository");
var common_1 = require("@nestjs/common");
var item_flashsales_service_1 = require("./item-flashsales.service");
var item_flashsales_controller_1 = require("./item-flashsales.controller");
var typeorm_1 = require("@nestjs/typeorm");
var ItemFlashsalesModule = /** @class */ (function () {
    function ItemFlashsalesModule() {
    }
    ItemFlashsalesModule = __decorate([
        (0, common_1.Module)({
            controllers: [item_flashsales_controller_1.ItemFlashsalesController],
            providers: [item_flashsales_service_1.ItemFlashsalesService],
            imports: [
                typeorm_1.TypeOrmModule.forFeature([item_flashsales_repository_1.ItemFlashsalesRepository]),
                items_module_1.ItemsModule,
                flashsales_module_1.FlashsalesModule,
            ],
            exports: [item_flashsales_service_1.ItemFlashsalesService]
        })
    ], ItemFlashsalesModule);
    return ItemFlashsalesModule;
}());
exports.ItemFlashsalesModule = ItemFlashsalesModule;
