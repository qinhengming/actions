import { ETriggerType , IActionRender } from '@onein/shared'

type TN = undefined | number

export interface IEvent {
  /**
   * id
   */
  id: string
  /**
   * 事件名称
   */
  eventName: string
  /**
   * 触发类型
   */
  triggerType: ETriggerType
  /**
   * 事件类型
   */
  eventType: string
  /**
   * 单个动作
   */
  action: IActionRender
  /**
   * 动作防重限制触发时间
   */
  tn?: TN
}
