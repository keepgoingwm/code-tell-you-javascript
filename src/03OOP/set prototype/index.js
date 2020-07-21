var O = function() {}
O.prototype.func1 = function() {
  console.log('run func1')
}
O.prototype.func2 = function() {
  console.log('run func2')
}

var o1 = new O()
O.prototype.func3 = function() {
  console.log('run func3')
}

O.prototype = {
  func1() {
    console.log('[new]run func1')
  },
  func3() {
    console.log('[new]run func3')
  }
}

var o2 = new O()

o1.func1()
o1.func2()
o1.func3() // 原型的动态性
o2.func1()
try {
  o2.func2()
} catch (error) {
  console.log(error.message)
}
o2.func3()
