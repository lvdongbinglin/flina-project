"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMailModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const main_const_1 = require("../constant/main.const");
const email_service_1 = require("../service/email.service");
let AppMailModule = class AppMailModule {
};
AppMailModule = __decorate([
    common_1.Module({
        imports: [
            mailer_1.MailerModule.forRoot(main_const_1.emailconf)
        ],
        providers: [email_service_1.EmailService],
    })
], AppMailModule);
exports.AppMailModule = AppMailModule;
//# sourceMappingURL=app.mail.module.js.map