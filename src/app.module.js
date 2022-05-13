"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var roles_guard_1 = require("./authorization/roles.guard");
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var users_module_1 = require("./users/users.module");
var typeorm_1 = require("@nestjs/typeorm");
var auth_module_1 = require("./auth/auth.module");
var config_1 = require("@nestjs/config");
var categories_module_1 = require("./categories/categories.module");
var nestjs_form_data_1 = require("nestjs-form-data");
var platform_express_1 = require("@nestjs/platform-express");
var uploads_module_1 = require("./uploads/uploads.module");
var mailer_1 = require("@nestjs-modules/mailer");
var items_module_1 = require("./items/items.module");
var flashsales_module_1 = require("./flashsales/flashsales.module");
var item_flashsales_module_1 = require("./item-flashsales/item-flashsales.module");
var vouchers_module_1 = require("./vouchers/vouchers.module");
var orders_module_1 = require("./orders/orders.module");
var core_1 = require("@nestjs/core");
var schedule_1 = require("@nestjs/schedule");
var cronjob_service_1 = require("./cronjob/cronjob.service");
var cronjob_module_1 = require("./cronjob/cronjob.module");
// RolesGuard
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    username: 'postgres',
                    password: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    database: 'ecommerce',
                    autoLoadEntities: true,
                    synchronize: true,
                    logging: true
                }),
                mailer_1.MailerModule.forRoot({
                    transport: {
                        host: 'smtp.gmail.com',
                        port: 587,
                        service: 'gmail',
                        ignoreTLS: false,
                        secure: false,
                        auth: {
                            user: 'bot.sendmail.99@gmail.com',
                            pass: 'Tung99.123'
                        }
                    },
                    defaults: {
                        from: '"Ecommerce" <tungplatin@gmail.com>'
                    }
                }),
                config_1.ConfigModule.forRoot({
                    envFilePath: ['.env'],
                    isGlobal: true
                }),
                platform_express_1.MulterModule.register({
                    dest: './files'
                }),
                schedule_1.ScheduleModule.forRoot(),
                auth_module_1.AuthModule,
                users_module_1.UsersModule,
                categories_module_1.CategoriesModule,
                nestjs_form_data_1.NestjsFormDataModule,
                uploads_module_1.UploadsModule,
                items_module_1.ItemsModule,
                flashsales_module_1.FlashsalesModule,
                item_flashsales_module_1.ItemFlashsalesModule,
                vouchers_module_1.VouchersModule,
                orders_module_1.OrdersModule,
                cronjob_module_1.CronjobModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [
                app_service_1.AppService,
                {
                    provide: core_1.APP_GUARD,
                    useClass: roles_guard_1.RolesGuard
                },
                cronjob_service_1.CronjobService,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
