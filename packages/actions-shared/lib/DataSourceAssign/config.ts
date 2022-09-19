import { EActionType, EGroupName, IConfigAction } from '@common'
import {
  createDataSourceAssignProp,
  createDataSourceFilterProp,
  createDataSourceProp,
  createSelectProp
} from '@/common/editor/ActionEditor'
import { EInsertPosition } from '@onein/shared'

const dataSourceAssignAction: IConfigAction = {
  typeName: EActionType.DataSourceAssign,
  displayName: '赋值数据',
  marks:
    '赋值数据节点主要解决往数据源中追加内容或修改内容，通过该节点引起的数据源数据变化不会被标记为，新增、修改或者删除，如果想要产生标记效果请调用【数据编辑节点】、【数据新增节点】和【数据删除节点】',
  pinyin: 'fuzhishuju',
  pinyinAbbr: 'fzsj',
  index: 0,
  groupName: EGroupName.Data,
  props: {
    dataSourceId: createDataSourceProp({
      label: '选择数据源',
      hasTab: true
    }),
    assignMode: createSelectProp({
      label: '赋值模式',
      options: [
        {
          label: '新增',
          value: 'add'
        },
        {
          label: '编辑',
          value: 'edit'
        }
      ]
    }),
    insertPosition: createSelectProp({
      label: '新增位置',
      options: [
        { label: '起始', value: EInsertPosition.Start },
        { label: '末尾', value: EInsertPosition.End },
        { label: '当前操作行上面', value: EInsertPosition.Above },
        { label: '当前操作行下面', value: EInsertPosition.Below }
      ]
    }),
    filter: createDataSourceFilterProp({
      label: '筛选设置'
    }),
    assign: createDataSourceAssignProp({
      label: '数据源赋值设置'
    })
  }
}

export default dataSourceAssignAction
