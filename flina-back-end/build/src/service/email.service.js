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
exports.EmailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let EmailService = class EmailService {
    constructor(mailService) {
        this.mailService = mailService;
    }
    send(toEmail, suject, html) {
        const code = html;
        const date = new Date();
        console.log(toEmail, suject, code, process.cwd() + "/src/inside/conf");
        const emailOptions = {
            to: toEmail,
            from: '1745509482@qq.com',
            subject: suject,
            template: "src/inside/conf/send-code-email",
            context: {
                code,
                date,
                sign: '系统邮件,回复无效。'
            }
        };
        this.mailService.sendMail(emailOptions).then(_ => {
            common_1.Logger.log("Send mail success.");
        }).catch(err => common_1.Logger.error(err));
    }
};
EmailService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map