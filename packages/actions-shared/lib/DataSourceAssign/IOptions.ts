import { IBaseOption } from '@common/interfaces/IBaseOption'
import { DataLimit, EFilterMode, EInsertPosition, ICondition, IDataSourceSetting, IExpression } from '@onein/shared'

export interface IDataSourceAssignOptions extends IBaseOption {
  dataSourceId: string | IExpression
  assignMode: string
  insertPosition?: EInsertPosition
  filter?: {
    filterType: EFilterMode
    quickType?: DataLimit
    customCondition?: ICondition
  }
  assign: IDataSourceSetting[]
}
