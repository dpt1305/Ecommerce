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
exports.UploadsController = void 0;
var swagger_1 = require("@nestjs/swagger");
// import { UploadsService } from './uploads.service';
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var multer_1 = require("multer");
var UploadsController = /** @class */ (function () {
    function UploadsController() {
    }
    // constructor(private uploadsService: UploadsService) {}
    UploadsController.prototype.uploadImage = function (file) {
        console.log(file);
        return file;
    };
    UploadsController.prototype.uploadImages = function (files) {
        console.log(files);
        return files;
    };
    __decorate([
        (0, common_1.Post)('file'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
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
                    file: {
                        type: 'string',
                        format: 'binary'
                    }
                }
            }
        }),
        __param(0, (0, common_1.UploadedFile)())
    ], UploadsController.prototype, "uploadImage");
    __decorate([
        (0, common_1.Post)('files'),
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
                    }
                }
            }
        }),
        __param(0, (0, common_1.UploadedFiles)())
    ], UploadsController.prototype, "uploadImages");
    UploadsController = __decorate([
        (0, swagger_1.ApiTags)('File'),
        (0, common_1.Controller)('uploads')
    ], UploadsController);
    return UploadsController;
}());
exports.UploadsController = UploadsController;
