
import _ from 'lodash'

const usersA = [
  { userId: '1', name: 'Elena' },
  { userId: '2', name: 'Neo' }
]
const usersB = [
  { userId: '1', name: 'Elena' },
  { userId: '3', name: 'Amy' }
]
const userC = userA.concat(userB)
console.log('concat', userC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const userD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)
