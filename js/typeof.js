import getType from './getType'

console.log(typeof 'Hello world!')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])

/*
function getType(data) {
  // return Object.prototype.toString.call(data)
  // 좀 더 명확한 결과
  return Object.prototype.toStrimg.call(data).slice(8, -1)
}
*/

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))
