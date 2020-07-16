var LazySingle = (function() {
  var _instance = null

  function Single() {
    this.a = 1
  }
  Single.prototype.func1 = function() {
    return 'run func1'
  }

  return function() {
    if (!_instance) {
      _instance = new Single()
    }

    return _instance
  }
})()

var s1 = LazySingle()
s1.a = 2
console.log('实例1', s1, s1.a === 2)
var s2 = LazySingle()
console.log('实例2', s2, s1.a === 2)
