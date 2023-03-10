import { DBjList } from '../../types'
import convertObj from './convertObj'

const getAllKeys = (data: DBjList) => {
  const keyEntries = data.map((item) => {
    return Object.keys(item)
  })

  return [...new Set(keyEntries.flat())]
}

const getFirstKeys = (data: DBjList) => {
  return Object.keys(data[0])
}

export default (data: DBjList, deep = false) => {
  const keys = (deep ? getAllKeys : getFirstKeys)(data)
  return convertObj(keys, data)
}
