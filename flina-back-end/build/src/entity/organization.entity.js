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
exports.Person = void 0;
const swagger_1 = require("@nestjs/swagger");
const main_const_1 = require("../constant/main.const");
const typeorm_1 = require("typeorm");
let Person = class Person {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Person.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "名称"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "统一社会信用代码 ｜ 组织内部代码"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "id_card", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "电话"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Person.prototype, "concat", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "递归"
    }),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Person.prototype, "is_recursion", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "递归父级"
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Person.prototype, "recursion_parent_id", void 0);
Person = __decorate([
    swagger_1.ApiTags(main_const_1.tag.core),
    typeorm_1.Entity("core_organization")
], Person);
exports.Person = Person;
//# sourceMappingURL=organization.entity.js.map