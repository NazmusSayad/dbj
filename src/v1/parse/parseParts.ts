import { DBjList } from '../../types'

const parser = (str: string, lineNumber: number) => {
  if (str === '-') return undefined
  try {
    return JSON.parse(str.trim())
  } catch {
    throw new Error(`Unexpected token: ${str} at line: ${lineNumber}`)
  }
}

export default (keys: string[], values: string[]) => {
  const output: DBjList = []
  const keysLen = keys.length
  const chunksLen = keysLen + 1

  values.forEach((value, i) => {
    /**
     * @param {chunkInnerInd}
     * This is the index of lines
     * */
    const chunkInnerInd = i % chunksLen
    if (chunkInnerInd === keysLen) return

    /**
     * @param {chunkInd}
     * This is the index of output
     * */
    const chunkInd = Math.floor(i / chunksLen)
    const key = keys[chunkInnerInd]

    /**
     * @param {lineNumber}
     * 1 for Keys line,
     * 1 for New Lines,
     * 1 for index -> lenght
     * */
    const lineNumber = i + 3

    output[chunkInd] ??= {}
    output[chunkInd][key] = parser(value, lineNumber)
  })

  return output
}
