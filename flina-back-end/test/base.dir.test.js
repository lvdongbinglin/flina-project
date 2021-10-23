

var crypto = require("crypto")

/**
 * I mean the process.cwd() is equal the __dirname
 */
console.log(__dirname, process.cwd(), __dirname === process.cwd());


console.log(crypto.randomBytes(16).toString("hex"));