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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("../service/login.service");
const login_dto_1 = require("../dto/login.dto");
const email_service_1 = require("../service/email.service");
let LoginController = class LoginController {
    constructor(loginService, emailService) {
        this.loginService = loginService;
        this.emailService = emailService;
    }
    register(createLoginDto) {
        common_1.Logger.log("登陆开始" + JSON.stringify(createLoginDto));
        const flag = this.check(createLoginDto);
        return this.loginService.logup(createLoginDto);
    }
    login(createLoginDto) {
        return this.loginService.login(createLoginDto);
    }
    getCode(email) {
        this.emailService.send(email, "验证码", "11");
    }
    findAll() {
        return this.loginService.findAll();
    }
    findOne(id) {
        return this.loginService.findOne(+id);
    }
    update(id, updateLoginDto) {
        return this.loginService.update(+id, updateLoginDto);
    }
    remove(id) {
        return this.loginService.remove(+id);
    }
    check(createLoginDto) {
        return false;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.CreateLoginDto]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "register", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.CreateLoginDto]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "login", null);
__decorate([
    common_1.Get('code/:email'),
    __param(0, common_1.Param('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getCode", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, login_dto_1.CreateLoginDto]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "remove", null);
LoginController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        email_service_1.EmailService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map