let count = 1;
let friends = ['元素1'];

function plusCount() {
  count++
};

function plusYuanhua() {
  friends.push('元素2');
}

const timer = setInterval(() => {
  console.log('module 每秒打印 - count', count);
  console.log('module 每秒打印 - friends', friends);
}, 1000);

setTimeout(() => {clearTimeout(timer)}, 5000)
console.log('代码执行');

module.exports = {
  count,
  friends,
  plusCount,
  plusYuanhua,
}