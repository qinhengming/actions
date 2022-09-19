import { EActionType, IActionRes } from '@common'
import { IDataSourceDeleteOptions } from './IOptions'
import { shortGuid, _getExpressValue } from '@common/utils'
import { EAppType } from '@common/enums/EAppType'
import { IActionRuntime } from '@common/interfaces/IActionRuntime'
import { DataLimit, EDataMark, EFilterMode, IActionRender } from '@onein/shared'
import { useActionRes } from '../useActionRes'

/**
 * 删除数据
 */
export class DataSourceDelete implements IActionRender, IActionRuntime {
  typeName: EActionType = EActionType.DataSourceDelete

  isAsync: boolean = true
  id: string = ''
  label: string = ''
  marks: string = ''
  props: IDataSourceDeleteOptions = {
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
    const handleDeleteData = async () => {
      let s = runtime.getDataContextValueCursor(
        this.props.dataSourceId,
        this.props.filter?.filterType,
        quickType,
        this.props.filter?.customCondition,
        loopCtx,
        specifiedLine
      )
      await runtime.setDataContextFieldValue(this.props.dataSourceId, s, EDataMark.Delete)
    }
    try {
      await handleDeleteData()
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
