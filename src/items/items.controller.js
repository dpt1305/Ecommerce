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
exports.ItemsController = void 0;
var item_flashsale_entity_1 = require("./../item-flashsales/entities/item-flashsale.entity");
var swagger_1 = require("@nestjs/swagger");
var multer_1 = require("multer");
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var typeorm_1 = require("typeorm");
// import { ApiTags, ApiConsumes}
var ItemsController = /** @class */ (function () {
    function ItemsController(itemsService) {
        this.itemsService = itemsService;
    }
    ItemsController.prototype.create = function (createItemDto, categoryId, files) {
        return this.itemsService.create(createItemDto, categoryId, files);
    };
    ItemsController.prototype.updateItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var items, timeNow, index, itemId, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.itemsService.findAll()];
                    case 1:
                        items = _a.sent();
                        console.log(items);
                        timeNow = new Date();
                        index = 0;
                        _a.label = 2;
                    case 2:
                        if (!(index < items.length)) return [3 /*break*/, 8];
                        itemId = (items[index].id);
                        return [4 /*yield*/, (0, typeorm_1.getConnection)()
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
                    case 3:
                        query = _a.sent();
                        console.log(query);
                        if (!query[0]) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.itemsService.updateIsSaleTrue(itemId)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.itemsService.updateIsSaleFalse(itemId)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        index++;
                        return [3 /*break*/, 2];
                    case 8: return [2 /*return*/, items];
                }
            });
        });
    };
    ItemsController.prototype.findAll = function () {
        return this.itemsService.findAll();
    };
    ItemsController.prototype.findOne = function (id) {
        return this.itemsService.findOne(id);
    };
    ItemsController.prototype.update = function (id, updateItemDto, itemAvatar) {
        return this.itemsService.update(id, updateItemDto, itemAvatar);
    };
    ItemsController.prototype.remove = function (id) {
        return this.itemsService.remove(id);
    };
    // @ApiConsumes('multipart/form-data')
    ItemsController.prototype.decreaseItemQuantity = function (id, decreaseItemDto) {
        console.log(decreaseItemDto);
        return this.itemsService.decreaseItemQuantity(id, decreaseItemDto);
    };
    __decorate([
        (0, common_1.Post)(':id'),
        (0, swagger_1.ApiConsumes)('multipart/form-data'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
            { name: 'avatar', maxCount: 1 },
            { name: 'images', maxCount: 10 },
        ], {
            storage: (0, multer_1.diskStorage)({
                destination: './files',
                filename: function (req, file, cb) {
                    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    cb(null, uniqueSuffix + '-' + file.originalname);
                }
            }),
            fileFilter: function (req, file, callback) {
                if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                    return callback(new Error('Only image files are allowed!'), false);
                }
                callback(null, true);
            }
        })),
        (0, swagger_1.ApiBody)({
            schema: {
                type: 'object',
                properties: {
                    // categoryId: {
                    //   type: 'string',
                    // },
                    images: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'binary'
                        }
                    },
                    name: {
                        type: 'string'
                    },
                    barcode: {
                        type: 'string'
                    },
                    importPrice: {
                        type: 'number'
                    },
                    price: {
                        type: 'number'
                    },
                    weight: {
                        type: 'number'
                    },
                    quantity: {
                        type: 'Number'
                    },
                    avatar: {
                        // items: {
                        type: 'string',
                        format: 'binary'
                    },
                    description: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    }
                }
            }
        }),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Param)('id')),
        __param(2, (0, common_1.UploadedFiles)())
    ], ItemsController.prototype, "create");
    __decorate([
        (0, common_1.Get)('testupdateitem')
    ], ItemsController.prototype, "updateItem");
    __decorate([
        (0, common_1.Get)()
    ], ItemsController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ItemsController.prototype, "findOne");
    __decorate([
        (0, swagger_1.ApiConsumes)('multipart/form-data'),
        (0, common_1.Patch)(':id'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('itemAvatar', {
            storage: (0, multer_1.diskStorage)({
                destination: './avatar',
                filename: function (req, file, cb) {
                    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    cb(null, uniqueSuffix + '-' + file.originalname);
                }
            }),
            fileFilter: function (req, file, callback) {
                if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                    return callback(new Error('Only image files are allowed!'), false);
                }
                callback(null, true);
            }
        })),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __param(2, (0, common_1.UploadedFile)())
    ], ItemsController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ItemsController.prototype, "remove");
    __decorate([
        (0, common_1.Patch)('/order/:id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ItemsController.prototype, "decreaseItemQuantity");
    ItemsController = __decorate([
        (0, swagger_1.ApiTags)('Items'),
        (0, common_1.Controller)('items')
    ], ItemsController);
    return ItemsController;
}());
exports.ItemsController = ItemsController;
