var extend = function(target, source) {
  for (var prop in source) {
    target[prop] = source[prop]
  }

  return target
}

var source = {
  a: 1
}
var target = {
  b: 2
}
extend(source, target)
console.log(source)