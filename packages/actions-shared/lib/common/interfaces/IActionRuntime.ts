import { IActionRes } from '@common'
import { EAppType } from '@common/enums/EAppType'
import { IActionRender, Editor } from '@onein/shared'
import { IBaseOption } from './IBaseOption'

interface IActionParams {
  pageEditor: Editor
  appType: EAppType
  loopCtx?: any
  triggerType?: string
  eventCtx?: any
}
export interface IActionRuntime extends IActionRender {
  init(options?: IBaseOption, curNode?: any): IActionRuntime
  /**
   * 执行动作
   */
  execute(params: IActionParams): IActionRes | Promise<IActionRes>
}
