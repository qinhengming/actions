import { IBaseOption } from '@common/interfaces/IBaseOption'
import { DataLimit, EFilterMode, ICondition } from '@onein/shared'
export interface IDataSourceClearSelectedOptions extends IBaseOption {
  dataSourceId: string
  filter?: {
    filterType: EFilterMode
    quickType?: DataLimit
    customCondition?: ICondition
  }
}
