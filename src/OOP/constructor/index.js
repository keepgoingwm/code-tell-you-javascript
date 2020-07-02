function ClassA () {

}

console.log(ClassA.__proto__ === Function.prototype) // 
console.log(ClassA.prototype.constructor === ClassA)