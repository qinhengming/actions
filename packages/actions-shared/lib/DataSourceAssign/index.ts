import { EActionType, IActionRes } from '@common'
import { shortGuid, _getExpressValue } from '@common/utils'
import { EAppType } from '@common/enums/EAppType'
import { IActionRuntime } from '@common/interfaces/IActionRuntime'
import { DataLimit, EDataMark, EFilterMode, EInsertPosition, IActionRender } from '@onein/shared'
import { IDataSourceAssignOptions } from './IOptions'
import { useActionRes } from '../useActionRes'

/**
 * dataSourceAssignAction节点
 */
export class DataSourceAssign implements IActionRender, IActionRuntime {
  typeName: EActionType = EActionType.DataSourceAssign

  isAsync: boolean = true
  id: string = ''
  label: string = ''
  marks: string = ''
  props: IDataSourceAssignOptions = {
    dataSourceId: '',
    assignMode: 'add',
    insertPosition: EInsertPosition.Start,
    filter: {
      filterType: EFilterMode.Quick,
      quickType: DataLimit.Current
    },
    assign: []
  }
  constructor(id?: string) {
    this.id = id || shortGuid()
  }

  /**
   * 动作传参
   */
  init(options) {
    Object.assign(this.props, options)
    return this
  }
  /**
   * 获取数据源字段map
   */
  _getFieldMap(list, params) {
    const fieldsMap = new Map()
    list?.forEach((field) => {
      let expressRes = _getExpressValue(params, field.expression)
      let fieldName = field.fieldValue
      if (fieldName) {
        fieldsMap.set(fieldName, expressRes)
      }
    })
    return fieldsMap
  }
  /**
   * 动作执行
   */
  async execute(params): Promise<IActionRes> {
    let res = useActionRes()
    let { ctx, appType, loopCtx } = params
    const runtime = ctx.useDataContext()
    let quickType = this.props.filter && this.props.filter.quickType
    let isExtend = true
    if (appType === EAppType.Pc) {
      const handleAddData = async () => {
        const fieldsMap = this._getFieldMap(this.props.assign, params)
        await runtime.setDataContextFieldValue(
          this.props.dataSourceId,
          0,
          EDataMark.Add,
          fieldsMap,
          this.props.insertPosition,
          isExtend
        )
      }
      const handleEditData = async () => {
        let s = runtime.getDataContextValueCursor(
          this.props.dataSourceId,
          this.props.filter?.filterType,
          quickType,
          this.props.filter?.customCondition,
          loopCtx
        )
        const fieldsMap = this._getFieldMap(this.props.assign, params)
        await runtime.setDataContextFieldValue(this.props.dataSourceId, s, EDataMark.Edit, fieldsMap, null, isExtend)
      }

      if (this.props.assignMode === 'add') {
        await handleAddData()
      } else {
        await handleEditData()
      }
      return res
    } else {
      res.isSuccess = false
      return res
    }
  }
}
