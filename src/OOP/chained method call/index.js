var O = function() {}
O.prototype.func1 = function () {
  console.log('run func1')
  return this
}
O.prototype.func2 = function () {
  console.log('run func2')
  return this
}
O.prototype.func3 = function () {
  console.log('run func3')
  return this
}

var o = new O()
o.func1().func2().func3()
