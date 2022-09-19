import { EActionType, IActionRes } from '@common'
import { IDataSourceEditOptions } from './IOptions'
import { shortGuid, _getExpressValue } from '@common/utils'
import { EAppType } from '@common/enums/EAppType'
import { IActionRuntime } from '@common/interfaces/IActionRuntime'
import { DataLimit, EDataMark, EFilterMode, IActionRender } from '@onein/shared'
import { useActionRes } from '../useActionRes'

/**
 * 编辑数据
 */
export class DataSourceEdit implements IActionRender, IActionRuntime {
  typeName: EActionType = EActionType.DataSourceEdit

  isAsync: boolean = true
  id: string = ''
  label: string = ''
  marks: string = ''
  props: IDataSourceEditOptions = {
    dataSourceId: '',
    filter: {
      filterType: EFilterMode.Quick,
      quickType: DataLimit.Current
    }
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
  _getFieldMap(list, options) {
    const fieldsMap = new Map()
    list?.forEach((field) => {
      let expressRes = _getExpressValue(options, field.expression)
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
    if (!this.props.dataSourceId) {
      console.error('未设置数据源！')
      res.isSuccess = false
      return res
    }
    let quickType = this.props.filter && this.props.filter.quickType
    let specifiedLine = _getExpressValue(params, this.props?.filter?.quickField)
    const handleEditData = async () => {
      let s = runtime.getDataContextValueCursor(
        this.props.dataSourceId,
        this.props.filter?.filterType,
        quickType,
        this.props.filter?.customCondition,
        loopCtx,
        specifiedLine
      )
      const fieldsMap = this._getFieldMap(this.props.assign, params)
      await runtime.setDataContextFieldValue(this.props.dataSourceId, s, EDataMark.Edit, fieldsMap)
    }
    try {
      await handleEditData()
    } catch (error) {
      throw new Error(error)
    }
    if (appType === EAppType.Pc) {
      return res
    } else {
      return res
    }
  }
}
