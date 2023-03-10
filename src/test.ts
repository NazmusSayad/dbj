import * as fs from 'fs'
import dbj from './index'
const db = dbj

const testData = [
  {
    name: 'Sayad',
    age: 19,
    hobby: 'Coding',
    role: ['Dev'],
  },
  {
    name: 'Tanim',
    age: 18,
    hobby: 'Cricket',
    role: 'Designer',
  },
  {
    name: 'Sifat',
    age: 19,
    hobby: 'Study',
    role: ['Admin'],
  },
]

// const parsed = db.convert(testData)
// console.log(parsed)
// 
// fs.writeFileSync('../test.dbj', parsed)
const fileData = fs.readFileSync('../test.dbj', 'utf-8')

const obj = db.parse(fileData)
console.log(obj)
