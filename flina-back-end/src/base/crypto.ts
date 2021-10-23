import * as crypto from 'crypto';
import { BadRequestException } from '@nestjs/common';


const base64 = 'base64';
const sha1 = 'sha1';
// 10000 代表迭代次数 16代表长度
const iterateCount = 1000;
const length = 16;
const passwordException = '密码不能为空';
/**
 * Make salt
 */
export function makeSalt(): string {
  return crypto.randomBytes(3).toString(base64);
}

/**
 * Encrypt password
 * @param password 密码
 * @param salt 密码盐
 */
export function encryptPassword(password: string, salt: string): string {
  if (!password || !salt) {
    throw new BadRequestException(passwordException);
    return '';
  }
  const tempSalt = Buffer.from(salt, base64);

  return (
    crypto.pbkdf2Sync(password, tempSalt, iterateCount, length, sha1).toString(base64)
  );
}

export function hashPassword(password: string): string {
  if (!password) {
    throw new BadRequestException(passwordException);
  }
  return getHashCode(password).toString();
}

// chorme 脚本
// function hashPassword(password) {
//   if (!password) {
//     throw new BadRequestException(passwordException);
//   }
//   return getHashCode(password).toString();
// }
// function getHashCode(str) {

//   let hashcode = 0
//   for (let i = 0; i < str.length; i++) {
//     //溢出需要每次运算后立即处理，否则可能超过js数值的表示范围。
//     hashcode = hashcode * 31 + str.charCodeAt(i)
//     hashcode &= 0xffffffff
//   }
//   return hashcode;
// }




export function getHashCode(str: string) {

  let hashcode = 0
  for (let i = 0; i < str.length; i++) {
    //溢出需要每次运算后立即处理，否则可能超过js数值的表示范围。
    hashcode = hashcode * 31 + str.charCodeAt(i)
    hashcode &= 0xffffffff
  }
  return hashcode;
}
