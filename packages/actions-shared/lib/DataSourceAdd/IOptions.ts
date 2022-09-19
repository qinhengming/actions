import { IDataSourceSetting } from '@common'
import { IBaseOption } from '@common/interfaces/IBaseOption'
import { EInsertPosition } from '@onein/shared'

export interface IDataSourceAddOptions extends IBaseOption {
  dataSourceId: string,
  insertPosition: EInsertPosition,
  assign?: IDataSourceSetting[]
}
