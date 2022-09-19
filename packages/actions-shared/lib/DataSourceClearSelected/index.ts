import { injectable, unmanaged } from 'inversify'
import { EActionType, IActionRes } from '@common'
import { shortGuid } from '@common/utils'
import { EAppType } from '@common/enums/EAppType'
import { IActionRuntime } from '@common/interfaces/IActionRuntime'
import { DataLimit, EFilterMode, IActionRender } from '@onein/shared'
import 'reflect-metadata'
import { IDataSourceClearSelectedOptions } from './IOptions'
import { useActionRes } from '../useActionRes'

/**
 * dataSourceClearSelectedAction节点
 */
@injectable()
export class DataSourceClearSelected implements IActionRender, IActionRuntime {
  typeName: EActionType = EActionType.DataSourceClearSelected

  isAsync: boolean = false
  id: string = ''
  label: string = ''
  marks: string = ''
  props: IDataSourceClearSelectedOptions = {
    dataSourceId: '',
    filter: {
      filterType: EFilterMode.Quick,
      quickType: DataLimit.All
    }
  }
  constructor(@unmanaged() id?: string) {
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
  execute(params): IActionRes {
    let res = useActionRes()
    let { ctx, appType, loopCtx } = params
    const runtime = ctx.useDataContext()
    if (appType === EAppType.Pc) {
      let dsId = this.props.dataSourceId
      let filterMode = this.props.filter?.filterType
      let dataLimit = this.props.filter?.quickType
      let customFilter = this.props.filter?.customCondition
      runtime.setDataItemSelected(dsId, filterMode, dataLimit, customFilter, loopCtx, false)
      return res
    } else {
      res.isSuccess = false
      return res
    }
  }
}
