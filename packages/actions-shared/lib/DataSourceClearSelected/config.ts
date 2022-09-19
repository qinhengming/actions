import { EActionType, EGroupName, IConfigAction } from '@common'
import { createDataSourceFilterProp, createDataSourceProp } from '@/common/editor/ActionEditor'

const dataSourceClearSelectedAction: IConfigAction = {
  typeName: EActionType.DataSourceClearSelected,
  displayName: '清除选中',
  marks: '',
  pinyin: 'qingchuxuanzhong',
  pinyinAbbr: 'qcxz',
  index: 0,
  groupName: EGroupName.Data,
  props: {
    dataSourceId: createDataSourceProp({
      label: '数据源'
    }),
    filter: createDataSourceFilterProp({
      label: '筛选设置'
    })
  }
}

export default dataSourceClearSelectedAction
