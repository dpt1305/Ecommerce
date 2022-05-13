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
exports.ItemFlashsalesService = void 0;
var typeorm_1 = require("@nestjs/typeorm");
var item_flashsales_repository_1 = require("./item-flashsales.repository");
var common_1 = require("@nestjs/common");
var ItemFlashsalesService = /** @class */ (function () {
    function ItemFlashsalesService(itemsService, flashsalesService, itemFlashsalesRepository) {
        this.itemsService = itemsService;
        this.flashsalesService = flashsalesService;
        this.itemFlashsalesRepository = itemFlashsalesRepository;
    }
    ItemFlashsalesService.prototype.create = function (createItemFlashsaleDto) {
        return __awaiter(this, void 0, void 0, function () {
            var flashsale, item, quantity, itemFlashsale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.flashsalesService.findOne(createItemFlashsaleDto.flashsale)];
                    case 1:
                        flashsale = _a.sent();
                        return [4 /*yield*/, this.itemsService.findOne(createItemFlashsaleDto.item)];
                    case 2:
                        item = _a.sent();
                        if (createItemFlashsaleDto.quantity > item.quantity ||
                            createItemFlashsaleDto.quantity == 0) {
                            throw new common_1.BadRequestException('Quantity is not good.');
                        }
                        quantity = item.quantity - createItemFlashsaleDto.quantity;
                        return [4 /*yield*/, this.itemsService.update(item.id, { quantity: quantity }, null)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.itemFlashsalesRepository.create(__assign(__assign({}, createItemFlashsaleDto), { flashsale: flashsale, item: item }))];
                    case 4:
                        itemFlashsale = _a.sent();
                        return [4 /*yield*/, this.itemFlashsalesRepository.save(itemFlashsale)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ItemFlashsalesService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.itemFlashsalesRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new common_1.RequestTimeoutException();
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ItemFlashsalesService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.itemFlashsalesRepository.findOne({ id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        throw new common_1.NotFoundException();
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ItemFlashsalesService.prototype.update = function (id, updateItemFlashsaleDto) {
        return __awaiter(this, void 0, void 0, function () {
            var itemFlashsale, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        itemFlashsale = _a.sent();
                        return [4 /*yield*/, this.itemFlashsalesRepository.save(__assign(__assign({}, itemFlashsale), updateItemFlashsaleDto))];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new common_1.BadRequestException();
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ItemFlashsalesService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.itemFlashsalesRepository["delete"]({ id: id })];
                    case 1:
                        result = _a.sent();
                        if (result.affected) {
                            return [2 /*return*/, "Delete item flashsale with id:".concat(id, " successfully")];
                        }
                        else {
                            throw new common_1.NotFoundException();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemFlashsalesService = __decorate([
        (0, common_1.Injectable)(),
        __param(2, (0, typeorm_1.InjectRepository)(item_flashsales_repository_1.ItemFlashsalesRepository))
    ], ItemFlashsalesService);
    return ItemFlashsalesService;
}());
exports.ItemFlashsalesService = ItemFlashsalesService;
