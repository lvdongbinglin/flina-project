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
exports.LoginLog = void 0;
const swagger_1 = require("@nestjs/swagger");
const main_const_1 = require("../constant/main.const");
const typeorm_1 = require("typeorm");
let LoginLog = class LoginLog {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LoginLog.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "ip"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], LoginLog.prototype, "ip", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "路由"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], LoginLog.prototype, "url", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "请求"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], LoginLog.prototype, "request", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "响应"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], LoginLog.prototype, "response", void 0);
LoginLog = __decorate([
    swagger_1.ApiTags(main_const_1.tag.core),
    typeorm_1.Entity("core_login_log")
], LoginLog);
exports.LoginLog = LoginLog;
//# sourceMappingURL=log.entity.js.map