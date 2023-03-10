import { ListBCSV } from '../../types'
import convertObj from './convertObj'

const getAllKeys = (data: ListBCSV) => {
  return Object.keys(data[0]) // TODO
}

const getFirstKeys = (data: ListBCSV) => {
  return Object.keys(data[0])
}

export default (data: ListBCSV, deep = false) => {
  const keys = (deep ? getAllKeys : getFirstKeys)(data)
  return convertObj(keys, data)
}
