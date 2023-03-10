import parseParts from './parseParts'

const getKeyValues = (data: string) => {
  const rawKeys = data.match(/^.*\n\n/)
  if (!rawKeys) throw new Error('Invalid data')

  const trimmedKeys = rawKeys[0].trim()
  const keys = trimmedKeys.split(',')

  const linesRegex = '\n.*'.repeat(keys.length - 1)
  const regex = new RegExp(`\n\n(.*${linesRegex})`, 'gm')
  const parts = data.split(regex)

  return [keys, parts]
}

const parse = (data: string): any => {
  const [keys, values] = getKeyValues(data.trim())
  const output = parseParts(keys, values)
  return output
}

export default parse
