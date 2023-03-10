import { SingleBCSV, ListBCSV } from '../../types'

const parser = (data: string) => {
  if (data === '|') return undefined
  return JSON.parse(data)
}

export default (keys: string[], parts: string[]) => {
  const output: ListBCSV = []

  parts.forEach((part, i) => {
    if (i % 2 === 0) return
    const object: SingleBCSV = {}

    const lines = part.split('\n')
    lines.forEach((line, i) => {
      const key = keys[i]
      const value = parser(line)
      object[key] = value
    })

    output.push(object)
  })

  return output
}
