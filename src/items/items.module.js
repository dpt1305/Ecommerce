"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemsModule = void 0;
var categories_module_1 = require("./../categories/categories.module");
var image_item_repository_1 = require("./image-item.repository");
var items_repository_1 = require("./items.repository");
var typeorm_1 = require("@nestjs/typeorm");
var common_1 = require("@nestjs/common");
var items_service_1 = require("./items.service");
var items_controller_1 = require("./items.controller");
var ItemsModule = /** @class */ (function () {
    function ItemsModule() {
    }
    ItemsModule = __decorate([
        (0, common_1.Module)({
            controllers: [items_controller_1.ItemsController],
            providers: [items_service_1.ItemsService],
            imports: [
                typeorm_1.TypeOrmModule.forFeature([items_repository_1.ItemsRepository]),
                typeorm_1.TypeOrmModule.forFeature([image_item_repository_1.ImageItemRepository]),
                categories_module_1.CategoriesModule,
            ],
            exports: [items_service_1.ItemsService]
        })
    ], ItemsModule);
    return ItemsModule;
}());
exports.ItemsModule = ItemsModule;
