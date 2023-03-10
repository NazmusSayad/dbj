///////////////////////////

import * as fs from 'fs'
import * as db from './v1/index'
// import * as db from './v2/index'

const testData = [
  {
    name: 'Sayad',
    age: [19],
    hobby: 'Cricket',
    gender: 'Male',
  },
  {
    name: 'Sifat',
    // age: [19],
    hobby: 'Cricket',
  },
  {
    name: 'Tanim',
    age: [18],
    hobby: 'Cricket',
  },
]

const parsed = db.convert(testData)
console.log(parsed)

fs.writeFileSync('../test.bcsv', parsed)
const fileData = fs.readFileSync('../test.bcsv', 'utf-8')

const obj = db.parse(fileData)
console.log(obj)
