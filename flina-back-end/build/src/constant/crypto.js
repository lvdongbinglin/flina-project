"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashCode = exports.hashPassword = exports.encryptPassword = exports.makeSalt = void 0;
const crypto = require("crypto");
const common_1 = require("@nestjs/common");
const base64 = 'base64';
const sha1 = 'sha1';
const iterateCount = 1000;
const length = 16;
const passwordException = '密码不能为空';
function makeSalt() {
    return crypto.randomBytes(3).toString(base64);
}
exports.makeSalt = makeSalt;
function encryptPassword(password, salt) {
    if (!password || !salt) {
        throw new common_1.BadRequestException(passwordException);
        return '';
    }
    const tempSalt = Buffer.from(salt, base64);
    return (crypto.pbkdf2Sync(password, tempSalt, iterateCount, length, sha1).toString(base64));
}
exports.encryptPassword = encryptPassword;
function hashPassword(password) {
    if (!password) {
        throw new common_1.BadRequestException(passwordException);
    }
    return getHashCode(password).toString();
}
exports.hashPassword = hashPassword;
function getHashCode(str) {
    let hashcode = 0;
    for (let i = 0; i < str.length; i++) {
        hashcode = hashcode * 31 + str.charCodeAt(i);
        hashcode &= 0xffffffff;
    }
    return hashcode;
}
exports.getHashCode = getHashCode;
//# sourceMappingURL=crypto.js.map