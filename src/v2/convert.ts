import { DBjList } from '../types'

export default (dataList: DBjList) => {
  const strList = dataList.map((data) => JSON.stringify(data))
  return strList.join('\n')
}
