import { EActionType, EGroupName, IConfigAction } from '@common'
import {
  createDataSourceProp,
  createDataSourceFilterProp,
  createDataSourceAssignProp
} from '@/common/editor/ActionEditor'

const dataSourceEditAction: IConfigAction = {
  typeName: EActionType.DataSourceEdit,
  displayName: '编辑数据',
  marks: '数据编辑主要解决实体数据的编辑场景，如需要保存到数据库，请在该节点后面使用【提交数据源】进行数据提交',
  pinyin: 'bianjishuju',
  pinyinAbbr: 'bjsj',
  index: 0,
  groupName: EGroupName.Data,
  props: {
    dataSourceId: createDataSourceProp({
      label: '数据源'
    }),
    filter: createDataSourceFilterProp({
      label: '筛选设置'
    }),
    assign: createDataSourceAssignProp({
      label: '赋值设置'
    })
  }
}

export default dataSourceEditAction
