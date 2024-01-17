// 즉시실행함수
// IIFE, Immediately-Invoked Funciton Expression

const a = 7
function double() {
  console.log(a * 2)
}
double();

(function () {
  condole.log(a * 2)
})();

(function () {
  console.log(a * 2)
}());
