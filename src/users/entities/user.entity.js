"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = exports.AddressShipping = exports.Role = void 0;
var order_entity_1 = require("./../../orders/entities/order.entity");
var typeorm_1 = require("typeorm");
var Role;
(function (Role) {
    Role["SuperAdmin"] = "SuperAdmin";
    Role["Admin"] = "Admin";
    Role["User"] = "User";
})(Role = exports.Role || (exports.Role = {}));
var AddressShipping = /** @class */ (function () {
    function AddressShipping() {
    }
    return AddressShipping;
}());
exports.AddressShipping = AddressShipping;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], User.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text', { unique: true })
    ], User.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)('text', { nullable: true })
    ], User.prototype, "phone");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], User.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], User.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)('date', { nullable: true })
    ], User.prototype, "birthday");
    __decorate([
        (0, typeorm_1.Column)('text', { nullable: true })
    ], User.prototype, "avatar");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": Role,
            "default": Role.User
        })
    ], User.prototype, "role");
    __decorate([
        (0, typeorm_1.Column)({ type: 'boolean', "default": false })
    ], User.prototype, "verified");
    __decorate([
        (0, typeorm_1.Column)('text', { array: true, nullable: false })
    ], User.prototype, "address");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; }
        })
    ], User.prototype, "created_at");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)'
        })
    ], User.prototype, "modified_at");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return order_entity_1.Order; }, function (order) { return order.user; })
    ], User.prototype, "order");
    User = __decorate([
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;
