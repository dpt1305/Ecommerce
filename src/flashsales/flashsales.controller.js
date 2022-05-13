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
exports.FlashsalesController = void 0;
var swagger_1 = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var multer_1 = require("multer");
var FlashsalesController = /** @class */ (function () {
    function FlashsalesController(flashsalesService) {
        this.flashsalesService = flashsalesService;
    }
    FlashsalesController.prototype.create = function (createFlashsaleDto, flashSaleBanner) {
        return this.flashsalesService.create(createFlashsaleDto, flashSaleBanner);
    };
    FlashsalesController.prototype.findAll = function () {
        return this.flashsalesService.findAll();
    };
    FlashsalesController.prototype.findOne = function (id) {
        return this.flashsalesService.findOne(id);
    };
    FlashsalesController.prototype.update = function (id, updateFlashsaleDto, flashSaleBanner) {
        return this.flashsalesService.update(id, updateFlashsaleDto, flashSaleBanner);
    };
    FlashsalesController.prototype.remove = function (id) {
        return this.flashsalesService.remove(id);
    };
    __decorate([
        (0, common_1.Post)(),
        (0, swagger_1.ApiConsumes)('multipart/form-data'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('flashSaleBanner', 20, {
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
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.UploadedFiles)())
    ], FlashsalesController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], FlashsalesController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], FlashsalesController.prototype, "findOne");
    __decorate([
        (0, swagger_1.ApiConsumes)('multipart/form-data'),
        (0, common_1.Patch)(':id'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('flashSaleBanner', 20, {
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
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __param(2, (0, common_1.UploadedFiles)())
    ], FlashsalesController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], FlashsalesController.prototype, "remove");
    FlashsalesController = __decorate([
        (0, common_1.Controller)('flashsales'),
        (0, swagger_1.ApiTags)('Flash Sale'),
        (0, swagger_1.ApiConsumes)('multipart/form-data')
    ], FlashsalesController);
    return FlashsalesController;
}());
exports.FlashsalesController = FlashsalesController;
