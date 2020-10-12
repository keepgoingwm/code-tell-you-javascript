exports.done = false
let b = require('./modB.js')
exports.b=b
console.log('modA.js-1 b.done =', b.done)
exports.done = true
console.log('modA.js-2', '执行完毕')