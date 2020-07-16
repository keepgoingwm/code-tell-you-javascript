var { show } = require('../../index')

function prototypeExtend() {
  var F = function() {},
    i = 0,
    len = arguments.length

  for (; i < len; i++) {
    for (var j in arguments[i]) {
      F.prototype[j] = arguments[i][j]
    }
  }

  return new F()
}

var o = prototypeExtend({
  a: '1',
  b: '2',
  func1() {
    return 'run func1'
  }
}, {
  c: '3'
}, {
  func2() {
    return 'run func2'
  }
})

show(o.a, o.b, o.c)
show(o.func1(), o.func2())