// ES6 Classes

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullNmae() {
    return `${this.firstName} ${this.lastName}`
  }
}

const elena = new User('Elena', 'Shin')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(elena)
console.log(amy.getFullName())
console.log(neo.getFullName())
