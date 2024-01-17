import _ from 'lodash'

// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)

const user = {
  name: 'Elena',
  age: 94,
  emails: ['deveunhwa@gmail.com']
}
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

// 얕은 복사(Shallow copy)
// const copyUser = Object.assign({}, user)

// const copyUser = {...user}
// console.log(copyUser === user)

user.age = 30
console.log('user', user)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

// 깊은 복사(Deep copy)
user.emails.push('noe@zillinks.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)
