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
exports.ItemsService = void 0;
var item_flashsale_entity_1 = require("./../item-flashsales/entities/item-flashsale.entity");
var item_entity_1 = require("./entities/item.entity");
var image_item_entity_1 = require("./entities/image-item.entity");
var image_item_repository_1 = require("./image-item.repository");
var items_repository_1 = require("./items.repository");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var fs = require("fs-extra");
var typeorm_2 = require("typeorm");
var ItemsService = /** @class */ (function () {
    function ItemsService(categoriesService, itemsRepository, imageItemRepository) {
        this.categoriesService = categoriesService;
        this.itemsRepository = itemsRepository;
        this.imageItemRepository = imageItemRepository;
    }
    ItemsService.prototype.create = function (createItemDto, categoryId, files) {
        return __awaiter(this, void 0, void 0, function () {
            var category, newItem;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categoriesService.findOne(categoryId)];
                    case 1:
                        category = _a.sent();
                        if (!(files.avatar && files.images)) {
                            throw new common_1.BadRequestException('Must post avatar and images.');
                        }
                        return [4 /*yield*/, this.itemsRepository.create(__assign(__assign({}, createItemDto), { avatar: files.avatar[0].path, category: category, isSale: false }))];
                    case 2:
                        newItem = _a.sent();
                        return [4 /*yield*/, this.itemsRepository.save(newItem)];
                    case 3:
                        _a.sent();
                        files.images.forEach(function (element, index) { return __awaiter(_this, void 0, void 0, function () {
                            var newImageItem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.imageItemRepository.create({
                                            url: element.path,
                                            item: newItem
                                        })];
                                    case 1:
                                        newImageItem = _a.sent();
                                        return [4 /*yield*/, this.imageItemRepository.save(newImageItem)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/, newItem];
                }
            });
        });
    };
    ItemsService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.itemsRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ItemsService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.itemsRepository.findOne({ id: id })];
                    case 1:
                        item = _a.sent();
                        if (!item)
                            throw new common_1.NotFoundException('Not found item');
                        return [2 /*return*/, item];
                }
            });
        });
    };
    ItemsService.prototype.update = function (id, updateItemDto, file) {
        return __awaiter(this, void 0, void 0, function () {
            var item, avatar, update;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.itemsRepository.findOne({ id: id })];
                    case 1:
                        item = _a.sent();
                        if (item.avatar && file) {
                            fs.remove(item.avatar, function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var update;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (err)
                                                throw new Error('Can not update avatar');
                                            update = __assign(__assign(__assign({}, item), updateItemDto), { avatar: file.path });
                                            return [4 /*yield*/, this.itemsRepository.save(update)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, update];
                                    }
                                });
                            }); });
                        }
                        avatar = file ? file.path : item.avatar;
                        update = __assign(__assign(__assign({}, item), updateItemDto), { avatar: avatar });
                        return [4 /*yield*/, this.itemsRepository.save(update)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, update];
                }
            });
        });
    };
    ItemsService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.itemsRepository
                                .createQueryBuilder()["delete"]()
                                .from(image_item_entity_1.ImageItem)
                                .where('item = :id', { id: id })
                                .execute()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.itemsRepository
                                .createQueryBuilder()["delete"]()
                                .from(item_entity_1.Item)
                                .where('id = :id', { id: id })
                                .execute()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'Remove successfully.'];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error('Can not delete.');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ItemsService.prototype.decreaseItemQuantity = function (id, decreaseItemDto) {
        return __awaiter(this, void 0, void 0, function () {
            var item, orderNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        item = _a.sent();
                        orderNumber = decreaseItemDto.orderNumber;
                        if (item.quantity < orderNumber) {
                            throw new common_1.BadRequestException('Order number is bigger than quantity of item');
                        }
                        item.quantity -= orderNumber;
                        return [4 /*yield*/, this.itemsRepository.save(item)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ItemsService.prototype.getItemWithFlashsale = function (itemId) {
        return __awaiter(this, void 0, void 0, function () {
            var timeNow, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeNow = new Date();
                        return [4 /*yield*/, (0, typeorm_2.getConnection)()
                                .createQueryBuilder()
                                .select('item')
                                .addSelect('item_flashsale')
                                .addSelect('flashsale')
                                .addSelect('item.price', 'price')
                                .addSelect('item.price*(1-item_flashsale.discount)', 'realPrice')
                                .from(item_flashsale_entity_1.ItemFlashsale, 'item_flashsale')
                                .leftJoin('item_flashsale.item', 'item')
                                .innerJoin('item_flashsale.flashsale', 'flashsale')
                                .where('item.id = :id', { id: itemId })
                                .andWhere('flashsale.startSale < :timeNow', { timeNow: timeNow })
                                .andWhere('flashsale.endSale > :timeNow', { timeNow: timeNow })
                                .orderBy('item_flashsale.discount', 'DESC')
                                .limit(1)
                                .execute()];
                    case 1:
                        query = _a.sent();
                        return [2 /*return*/, query[0]];
                }
            });
        });
    };
    ItemsService.prototype.updateIsSaleTrue = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        item = _a.sent();
                        if (!!item.isSale) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.itemsRepository.save(__assign(__assign({}, item), { isSale: true }))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ItemsService.prototype.updateIsSaleFalse = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        item = _a.sent();
                        if (!item.isSale) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.itemsRepository.save(__assign(__assign({}, item), { isSale: false }))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ItemsService = __decorate([
        (0, common_1.Injectable)(),
        __param(1, (0, typeorm_1.InjectRepository)(items_repository_1.ItemsRepository)),
        __param(2, (0, typeorm_1.InjectRepository)(image_item_repository_1.ImageItemRepository))
    ], ItemsService);
    return ItemsService;
}());
exports.ItemsService = ItemsService;
