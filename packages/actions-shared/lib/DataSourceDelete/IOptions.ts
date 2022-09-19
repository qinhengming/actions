import { IBaseOption } from '@common/interfaces/IBaseOption'
import { DataLimit, EFilterMode, ICondition, IExpression } from '@onein/shared'

export interface IDataSourceDeleteOptions extends IBaseOption {
  dataSourceId: string
  filter?: {
    filterType: EFilterMode
    quickType?: DataLimit
    customCondition?: ICondition
    quickField?: IExpression
  }
}
