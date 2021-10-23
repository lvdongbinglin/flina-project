"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const swagger_1 = require("@nestjs/swagger");
const main_const_1 = require("../constant/main.const");
const typeorm_1 = require("typeorm");
let Login = class Login {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Login.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "登陆名称"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Login.prototype, "login_name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "登陆密码"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Login.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "验证码"
    }),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Login.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "更新时间"
    }),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Login.prototype, "up_time", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "电子邮件"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Login.prototype, "email", void 0);
Login = __decorate([
    swagger_1.ApiTags(main_const_1.tag.core),
    typeorm_1.Entity("core_login")
], Login);
exports.Login = Login;
//# sourceMappingURL=login.entity.js.map