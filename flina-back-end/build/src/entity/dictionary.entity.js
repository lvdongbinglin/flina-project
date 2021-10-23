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
exports.Dictionary = void 0;
const swagger_1 = require("@nestjs/swagger");
const main_const_1 = require("../constant/main.const");
const typeorm_1 = require("typeorm");
let Dictionary = class Dictionary {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Dictionary.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "概念"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Dictionary.prototype, "definition", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "领域"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Dictionary.prototype, "domain", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "种属"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Dictionary.prototype, "species", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "种差"
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Dictionary.prototype, "different", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "递归｜分类"
    }),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Dictionary.prototype, "is_recursion", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: "递归父级｜种属父级"
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Dictionary.prototype, "recursion_parent_id", void 0);
Dictionary = __decorate([
    swagger_1.ApiTags(main_const_1.tag.core),
    typeorm_1.Entity("core_dictionary")
], Dictionary);
exports.Dictionary = Dictionary;
//# sourceMappingURL=dictionary.entity.js.map