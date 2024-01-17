function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const elena = new User('Elena', 'Shin') // 생성자 함수
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(elena)
console.log(amy.getFullName())
console.log(neo.getFullName())

// const elena = {} // 리터럴 방식
