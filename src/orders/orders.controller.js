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
exports.OrdersController = void 0;
var swagger_1 = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var OrdersController = /** @class */ (function () {
    function OrdersController(ordersService, orderDetailsService) {
        this.ordersService = ordersService;
        this.orderDetailsService = orderDetailsService;
    }
    // @ApiConsumes('multipart/form-data')
    // @FormDataRequest()
    OrdersController.prototype.create = function (createOrderDto) {
        try {
            return this.ordersService.create(createOrderDto);
        }
        catch (error) {
            throw new common_1.BadRequestException('Create order badly.');
        }
    };
    OrdersController.prototype.createOrderDetail = function (createOrderDetailDto) {
        return this.orderDetailsService.create(createOrderDetailDto);
    };
    OrdersController.prototype.findAll = function () {
        return this.ordersService.findAll();
    };
    OrdersController.prototype.findOne = function (id) {
        try {
            return this.ordersService.findOne(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('Can not find order.');
        }
    };
    OrdersController.prototype.update = function (id, updateOrderDto) {
        return this.ordersService.update(+id, updateOrderDto);
    };
    OrdersController.prototype.remove = function (id) {
        return this.ordersService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], OrdersController.prototype, "create");
    __decorate([
        (0, common_1.Post)('orderdetail'),
        __param(0, (0, common_1.Body)())
    ], OrdersController.prototype, "createOrderDetail");
    __decorate([
        (0, common_1.Get)()
    ], OrdersController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], OrdersController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], OrdersController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], OrdersController.prototype, "remove");
    OrdersController = __decorate([
        (0, common_1.Controller)('orders'),
        (0, swagger_1.ApiTags)('Order')
    ], OrdersController);
    return OrdersController;
}());
exports.OrdersController = OrdersController;
