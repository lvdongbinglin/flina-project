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
exports.Page = void 0;
const swagger_1 = require("@nestjs/swagger");
const main_const_1 = require("../constant/main.const");
const typeorm_1 = require("typeorm");
let Page = class Page {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Page.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "名称"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Page.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "路径"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Page.prototype, "path", void 0);
Page = __decorate([
    swagger_1.ApiTags(main_const_1.tag.core),
    typeorm_1.Entity("core_page")
], Page);
exports.Page = Page;
//# sourceMappingURL=page.entity.js.map