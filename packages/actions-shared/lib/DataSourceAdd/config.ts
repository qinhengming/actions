import { EActionType, EGroupName, IConfigAction } from '@common'
import { createDataSourceProp, createDataSourceAssignProp, createSelectProp } from '@/common/editor/ActionEditor'
import { EInsertPosition } from '@onein/shared'

const dataSourceAddAction: IConfigAction = {
  typeName: EActionType.DataSourceAdd,
  displayName: '新增数据',
  marks: '新增数据节点，主要是解决数据新增场景，要把数据提交到后台数据库，请在该节点之后调用【提交数据源】节点',
  pinyin: 'xinzengshuju',
  pinyinAbbr: 'xzsj',
  index: 0,
  groupName: EGroupName.Data,
  props: {
    dataSourceId: createDataSourceProp({
      label: '数据源'
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
    assign: createDataSourceAssignProp({
      label: '赋值设置'
    })
  }
}

export default dataSourceAddAction
