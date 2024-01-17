import _ from 'lodash'

const users = [
  { userId: '1', name: 'Elena' },
  { userId: '2', name: 'Neo' },
  { userId: '3', name: 'Amy' },
  { userId: '4', name: 'Evan' },
  { userId: '5', name: 'Lewis' }
]

const fondUser = _.find(users, { name: 'Amy' })
const fondUserIndex = _.findIndex(users, { name: 'Amy' })
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { namd: 'Elena' })
console.log(users)
