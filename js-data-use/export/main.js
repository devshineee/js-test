import _ from 'lodash' // From `node_modules`!
// import getType from './getType' // getType.js
import checkType from './getType'
// import { random, user as neo } from './getRandom' // getRandom.js
import * as R from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
// console.log(random(), random())
console.log(R)
