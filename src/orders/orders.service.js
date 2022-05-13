"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OrdersService = void 0;
var order_details_repository_1 = require("./order-details.repository");
var order_entity_1 = require("./entities/order.entity");
var typeorm_1 = require("@nestjs/typeorm");
var orders_repository_1 = require("./orders.repository");
var common_1 = require("@nestjs/common");
var OrdersService = /** @class */ (function () {
    function OrdersService(ordersRepository, orderDetailsRepository, usersService, vouchersService, orderDetailsService, itemsService, itemFlashsalesService) {
        this.ordersRepository = ordersRepository;
        this.orderDetailsRepository = orderDetailsRepository;
        this.usersService = usersService;
        this.vouchersService = vouchersService;
        this.orderDetailsService = orderDetailsService;
        this.itemsService = itemsService;
        this.itemFlashsalesService = itemFlashsalesService;
    }
    /*{
    "userId": "0187d7e5-537c-4b0a-bc40-0ab554a9beb3",
    "voucherCode": "GIAM5K",
    "addressShipping": "Hanoi, Vietnam",
    "shippingPrice": 15,
    "items": [
      {
          "itemId": "81d18c6e-94d1-473a-999a-93ac4db9ff89",
          "quantity": 1
      }
    ]
  }
  
     */
    OrdersService.prototype.create = function (createOrderDto) {
        return __awaiter(this, void 0, void 0, function () {
            var voucherCode, userId, items, shippingPrice, addressShipping, user, voucher, _a, order, itemsPrice, index, query, item, _b, newItemsPrice, newShippingPrice;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        voucherCode = createOrderDto.voucherCode, userId = createOrderDto.userId, items = createOrderDto.items, shippingPrice = createOrderDto.shippingPrice, addressShipping = createOrderDto.addressShipping;
                        console.log(createOrderDto);
                        return [4 /*yield*/, this.usersService.findOne(userId)];
                    case 1:
                        user = _c.sent();
                        if (!voucherCode) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.vouchersService.findVoucherByCode(voucherCode)];
                    case 2:
                        _a = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = null;
                        _c.label = 4;
                    case 4:
                        voucher = _a;
                        if (user === undefined || voucher === undefined) {
                            throw new common_1.NotFoundException('Can not find information.');
                        }
                        console.log(user, voucher);
                        return [4 /*yield*/, this.ordersRepository.save({ shippingPrice: shippingPrice, status: order_entity_1.OrderStatus.Waiting, user: user, addressShipping: addressShipping })];
                    case 5:
                        order = _c.sent();
                        itemsPrice = 0;
                        index = 0;
                        _c.label = 6;
                    case 6:
                        if (!(index < items.length)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.itemsService.getItemWithFlashsale(items[index].itemId)];
                    case 7:
                        query = _c.sent();
                        return [4 /*yield*/, this.itemsService.findOne(items[index].itemId)];
                    case 8:
                        item = _c.sent();
                        //# check quantity for flashsale 
                        if (item.isSale) {
                            this.checkQuantity(items[index].quantity, query.item_flashsale_quantity, query.item_quantity);
                        }
                        return [4 /*yield*/, this.updateQuantityAndCreateOrderDetail(query, item, items[index].quantity, itemsPrice, order)];
                    case 9:
                        //# update quantity and calculate itemsPrice price
                        //# and create order detail
                        itemsPrice = _c.sent();
                        _c.label = 10;
                    case 10:
                        index++;
                        return [3 /*break*/, 6];
                    case 11:
                        if (!voucher) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.vouchersService.applyVoucher(voucher, itemsPrice, shippingPrice)];
                    case 12:
                        _b = _c.sent(), newItemsPrice = _b.itemsPrice, newShippingPrice = _b.shippingPrice;
                        console.log(newItemsPrice, newShippingPrice);
                        return [4 /*yield*/, this.ordersRepository.save(__assign(__assign({}, order), { voucher: voucher, shippingPrice: newShippingPrice, itemsPrice: newItemsPrice, total: newShippingPrice + newItemsPrice }))];
                    case 13: return [2 /*return*/, _c.sent()];
                    case 14: return [4 /*yield*/, this.ordersRepository.save(__assign(__assign({}, order), { voucher: null, itemsPrice: itemsPrice, total: shippingPrice + itemsPrice }))];
                    case 15: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    OrdersService.prototype.checkQuantity = function (quantity, item_flashsale_quantity, item_quantity) {
        if (item_flashsale_quantity != 0 &&
            (quantity > item_flashsale_quantity || quantity == 0)) {
            throw new common_1.BadRequestException('Quantity is not good.');
        }
        if (quantity > item_quantity || quantity == 0) {
            throw new common_1.BadRequestException('Quantity is not good.');
        }
    };
    OrdersService.prototype.updateQuantityAndCreateOrderDetail = function (query, item, quantity, itemsPrice, order) {
        return __awaiter(this, void 0, void 0, function () {
            var newItemFlashsale, newItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(query && query.item_flashsale_quantity != 0)) return [3 /*break*/, 3];
                        newItemFlashsale = {
                            quantity: query.item_flashsale_quantity - quantity
                        };
                        return [4 /*yield*/, this.itemFlashsalesService.update(query.item_flashsale_id, newItemFlashsale)];
                    case 1:
                        _a.sent();
                        //# create order detail
                        return [4 /*yield*/, this.createOrderDetail(item, order, query.item_flashsale_id, quantity, query.realPrice)];
                    case 2:
                        //# create order detail
                        _a.sent();
                        return [2 /*return*/, itemsPrice + query.realPrice * quantity];
                    case 3:
                        newItem = {
                            quantity: item.quantity - quantity
                        };
                        return [4 /*yield*/, this.itemsService.update(item.id, newItem, null)];
                    case 4:
                        _a.sent();
                        //# create order detail
                        return [4 /*yield*/, this.createOrderDetail(item, order, query.item_flashsale_id, quantity, query.price)];
                    case 5:
                        //# create order detail
                        _a.sent();
                        return [2 /*return*/, itemsPrice + query.price * quantity];
                }
            });
        });
    };
    OrdersService.prototype.createOrderDetail = function (item, order, iteamFlashsaleId, quantity, price) {
        return __awaiter(this, void 0, void 0, function () {
            var itemFlashsale, _a, orderDetail;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!iteamFlashsaleId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.itemFlashsalesService.findOne(iteamFlashsaleId)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        itemFlashsale = _a;
                        return [4 /*yield*/, this.orderDetailsRepository.create({
                                item: item,
                                order: order,
                                quantity: quantity,
                                price: price,
                                itemFlashsale: itemFlashsale
                            })];
                    case 4:
                        orderDetail = _b.sent();
                        return [4 /*yield*/, this.orderDetailsRepository.save(orderDetail)];
                    case 5: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    OrdersService.prototype.findAll = function () {
        return "This action returns all orders";
    };
    OrdersService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " order");
    };
    OrdersService.prototype.update = function (id, updateOrderDto) {
        return "This action updates a #".concat(id, " order");
    };
    OrdersService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " order");
    };
    OrdersService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(orders_repository_1.OrdersRepository)),
        __param(1, (0, typeorm_1.InjectRepository)(order_details_repository_1.OrderDetailsRepository))
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;
