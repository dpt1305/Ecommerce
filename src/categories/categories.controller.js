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
exports.CategoriesController = void 0;
var swagger_1 = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var multer_1 = require("multer");
var nestjs_form_data_1 = require("nestjs-form-data");
var CategoriesController = /** @class */ (function () {
    function CategoriesController(categoriesService) {
        this.categoriesService = categoriesService;
    }
    CategoriesController.prototype.create = function (createCategoryDto, files) {
        // console.log(createCategoryDto);
        return this.categoriesService.create(createCategoryDto, files);
    };
    CategoriesController.prototype.findAll = function () {
        return this.categoriesService.findAll();
    };
    CategoriesController.prototype.findOne = function (id) {
        return this.categoriesService.findOne(id);
    };
    CategoriesController.prototype.update = function (id, updateCategoryDto) {
        console.log(updateCategoryDto);
        return this.categoriesService.update(id, updateCategoryDto);
    };
    CategoriesController.prototype.remove = function (id) {
        return this.categoriesService.remove(id);
    };
    __decorate([
        (0, common_1.Post)()
        // @FormDataRequest()
        ,
        (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 20, {
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
        (0, swagger_1.ApiConsumes)('multipart/form-data'),
        (0, swagger_1.ApiBody)({
            schema: {
                type: 'object',
                properties: {
                    files: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'binary'
                        }
                    },
                    name: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    }
                }
            }
        }),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.UploadedFiles)())
    ], CategoriesController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], CategoriesController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CategoriesController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        (0, nestjs_form_data_1.FormDataRequest)(),
        (0, swagger_1.ApiConsumes)('multipart/form-data'),
        (0, swagger_1.ApiBody)({
            schema: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    status: {
                        type: 'string'
                    }
                }
            }
        }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], CategoriesController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CategoriesController.prototype, "remove");
    CategoriesController = __decorate([
        (0, swagger_1.ApiTags)('Categories'),
        (0, common_1.Controller)('categories')
    ], CategoriesController);
    return CategoriesController;
}());
exports.CategoriesController = CategoriesController;
