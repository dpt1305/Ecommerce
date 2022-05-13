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
exports.OrderDetailsService = void 0;
var order_detail_entity_1 = require("./entities/order-detail.entity");
var orders_repository_1 = require("./orders.repository");
var item_flashsale_entity_1 = require("./../item-flashsales/entities/item-flashsale.entity");
var typeorm_1 = require("@nestjs/typeorm");
var order_details_repository_1 = require("./order-details.repository");
var common_1 = require("@nestjs/common");
var typeorm_2 = require("typeorm");
// import { CreateOrderDetailDto}
var OrderDetailsService = /** @class */ (function () {
    function OrderDetailsService(orderDetailsRepository, ordersRepository, itemsService, itemFlashsalesService) {
        this.orderDetailsRepository = orderDetailsRepository;
        this.ordersRepository = ordersRepository;
        this.itemsService = itemsService;
        this.itemFlashsalesService = itemFlashsalesService;
    }
    OrderDetailsService.prototype.create = function (createOrderDetailDto) {
        return __awaiter(this, void 0, void 0, function () {
            var itemId, quantity, orderId, item, timeNow, query, itemFlashsale, _a, newItemFlashsale, newItem, order, orderDetail, query2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        itemId = createOrderDetailDto.itemId, quantity = createOrderDetailDto.quantity, orderId = createOrderDetailDto.orderId;
                        return [4 /*yield*/, this.itemsService.findOne(itemId)];
                    case 1:
                        item = _b.sent();
                        timeNow = new Date();
                        return [4 /*yield*/, (0, typeorm_2.getConnection)()
                                .createQueryBuilder()
                                .select('item')
                                .addSelect('item_flashsale.id', 'item_flashsale')
                                .addSelect('item.price*(1-item_flashsale.discount)', 'realPrice')
                                .from(item_flashsale_entity_1.ItemFlashsale, 'item_flashsale')
                                .leftJoin('item_flashsale.item', 'item')
                                .innerJoin('item_flashsale.flashsale', 'flashsale')
                                .where('item.id = :id', { id: itemId })
                                // .andWhere('flashsale.startSale < :timeNow', { timeNow })
                                // .andWhere('flashsale.endSale > :timeNow', { timeNow })
                                .orderBy('item_flashsale.discount', 'DESC')
                                .limit(1)
                                .execute()];
                    case 2:
                        query = _b.sent();
                        console.log(query);
                        if (!query[0]) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.itemFlashsalesService.findOne(query[0].item_flashsale)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = null;
                        _b.label = 5;
                    case 5:
                        itemFlashsale = _a;
                        console.log(itemFlashsale);
                        //# check quantity
                        if (itemFlashsale.quantity != 0 &&
                            (quantity > itemFlashsale.quantity || quantity == 0)) {
                            throw new common_1.BadRequestException('Quantity is not good.');
                        }
                        if (quantity > item.quantity || quantity == 0) {
                            throw new common_1.BadRequestException('Quantity is not good.');
                        }
                        if (!(itemFlashsale && itemFlashsale.quantity != 0)) return [3 /*break*/, 7];
                        newItemFlashsale = {
                            quantity: itemFlashsale.quantity - quantity
                        };
                        return [4 /*yield*/, this.itemFlashsalesService.update(itemFlashsale.id, newItemFlashsale)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        newItem = {
                            quantity: item.quantity - quantity
                        };
                        return [4 /*yield*/, this.itemsService.update(item.id, newItem, null)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [4 /*yield*/, this.ordersRepository.findOne({ id: orderId })];
                    case 10:
                        order = _b.sent();
                        console.log(order);
                        return [4 /*yield*/, this.orderDetailsRepository.create({
                                quantity: quantity,
                                item: item,
                                itemFlashsale: itemFlashsale,
                                price: query[0] ? query[0].realPrice : item.price,
                                order: order
                            })];
                    case 11:
                        orderDetail = _b.sent();
                        console.log(orderDetail);
                        return [4 /*yield*/, this.orderDetailsRepository.save(orderDetail)];
                    case 12:
                        _b.sent();
                        return [4 /*yield*/, (0, typeorm_2.getConnection)()
                                .createQueryBuilder()
                                .select('order')
                                .addSelect('order_detail')
                                .from(order_detail_entity_1.OrderDetail, 'order_detail')
                                .innerJoin('order_detail.order', 'order')
                                .execute()];
                    case 13:
                        query2 = _b.sent();
                        console.log(query2);
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderDetailsService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(order_details_repository_1.OrderDetailsRepository)),
        __param(1, (0, typeorm_1.InjectRepository)(orders_repository_1.OrdersRepository))
    ], OrderDetailsService);
    return OrderDetailsService;
}());
exports.OrderDetailsService = OrderDetailsService;
