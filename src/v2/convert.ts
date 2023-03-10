import { ListBCSV } from '../types'

export default (dataList: ListBCSV) => {
  const strList = dataList.map((data) => JSON.stringify(data))
  return strList.join('\n')
}
