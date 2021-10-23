var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('chai').assert

discribe("baseController", () => {

  it('should be cast', () => {
    const api = 'http://localhost:80';
    fetch(api, { method: "Get" }).then(res => res.text).then(() => console.log(res));
  })
})