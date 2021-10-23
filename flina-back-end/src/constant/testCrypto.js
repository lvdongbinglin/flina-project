function getHashCode (str) {

  let hashcode = 0
  for (let i = 0; i < str.length; i++) {
    //溢出需要每次运算后立即处理，否则可能超过js数值的表示范围。
    hashcode = hashcode * 31 + str.charCodeAt(i)
    hashcode &= 0xffffffff
  }
  return hashcode;
}

const result = getHashCode("1");

console.log(result);