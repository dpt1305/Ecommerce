"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrdersModule = void 0;
var vouchers_module_1 = require("./../vouchers/vouchers.module");
var users_module_1 = require("./../users/users.module");
var nestjs_form_data_1 = require("nestjs-form-data");
var flashsales_module_1 = require("./../flashsales/flashsales.module");
var item_flashsales_module_1 = require("./../item-flashsales/item-flashsales.module");
var items_module_1 = require("./../items/items.module");
var order_details_repository_1 = require("./order-details.repository");
var orders_repository_1 = require("./orders.repository");
var typeorm_1 = require("@nestjs/typeorm");
var common_1 = require("@nestjs/common");
var orders_service_1 = require("./orders.service");
var orders_controller_1 = require("./orders.controller");
var order_details_service_1 = require("./order-details.service");
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        (0, common_1.Module)({
            controllers: [orders_controller_1.OrdersController],
            providers: [orders_service_1.OrdersService, order_details_service_1.OrderDetailsService],
            imports: [
                typeorm_1.TypeOrmModule.forFeature([orders_repository_1.OrdersRepository, order_details_repository_1.OrderDetailsRepository]),
                items_module_1.ItemsModule,
                item_flashsales_module_1.ItemFlashsalesModule,
                flashsales_module_1.FlashsalesModule,
                nestjs_form_data_1.NestjsFormDataModule,
                users_module_1.UsersModule,
                vouchers_module_1.VouchersModule,
            ],
            exports: [order_details_service_1.OrderDetailsService, orders_service_1.OrdersService]
        })
    ], OrdersModule);
    return OrdersModule;
}());
exports.OrdersModule = OrdersModule;
