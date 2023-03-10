import parseParts from './parseParts'

const getKeyValues = (data: string) => {
  const [rawKeys, , ...values] = data.split('\n')
  const keys = rawKeys.trim().split(',')
  return [keys, values]
}

const parse = (data: string): any => {
  if (data.match(/\n$/g)) {
    throw new Error('Unexpected new line at the end')
  }

  const [keys, values] = getKeyValues(data)
  const output = parseParts(keys, values)
  return output
}

export default parse
