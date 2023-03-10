import { DBjList } from '../../types'

const convertValue = (value: undefined | string | number) => {
  if (value == undefined) return '-'
  return JSON.stringify(value)
}

export default (keys: string[], data: DBjList) => {
  let output = keys.join(',')

  data.forEach((obj) => {
    output += '\n'

    keys.forEach((key) => {
      const value = obj[key]
      output += `\n${convertValue(value)}`
    })
  })

  return output
}
