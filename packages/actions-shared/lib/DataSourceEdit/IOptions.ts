import { IDataSourceSetting } from '@common'
import { IBaseOption } from '@common/interfaces/IBaseOption'
import { DataLimit, EFilterMode, ICondition, IExpression } from '@onein/shared'

export interface IDataSourceEditOptions extends IBaseOption {
  dataSourceId: string
  filter?: {
    filterType: EFilterMode
    quickType?: DataLimit
    customCondition?: ICondition
    quickField?: IExpression
  }
  assign?: IDataSourceSetting[]
}
