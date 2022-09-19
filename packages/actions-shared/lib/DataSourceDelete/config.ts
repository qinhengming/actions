import { EActionType, EGroupName, IConfigAction } from '@common'
import { createDataSourceProp, createDataSourceFilterProp } from '@/common/editor/ActionEditor'

const dataSourceDeleteAction: IConfigAction = {
  typeName: EActionType.DataSourceDelete,
  displayName: '删除数据',
  marks: '数据删除节点，主要是删除数据源中的数据，如果要把这个删除结果保存到后端，请在该节点之后调用【提交数据源节点】进行数据提交操作',
  pinyin: 'shanchushuju',
  pinyinAbbr: 'scsj',
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

export default dataSourceDeleteAction
