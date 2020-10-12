exports.done = false
let a = require('./modA.js')
console.log('modB.js-1 a.done =', a.done)
exports.done = true
console.log('modB.js-2', '执行完毕')