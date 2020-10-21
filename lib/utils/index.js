let displayRes = function(...args) {
  console.log('结果:', ...args)
}

let identity = function(value) { return value }

module.exports = {
  displayRes,
  identity
}
