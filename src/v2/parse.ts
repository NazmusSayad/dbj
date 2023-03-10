export default (data: string) => {
  const lines = data.trim().split('\n')
  return lines.map((line) => {
    return JSON.parse(line)
  })
}
