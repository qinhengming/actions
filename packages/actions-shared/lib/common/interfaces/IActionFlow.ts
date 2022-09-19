import { ActionFlowIdRef } from '@common/types/TAction'
import { IActionRender, IEdge } from '@onein/shared'

export interface IGraph {
  nodes?: any[]
  edges?: any[]
  combos?: any[]
  [key: string]: any
}

export interface IActionFlow {
  /**
   * id
   */
  id: ActionFlowIdRef
  /**
   * 动作流显示名称
   */
  displayName: string
  /**
   * 动作列表
   */
  actions: IActionRender[]
  /**
   * 动作边线列表
   */
  edges?: IEdge[]
  /**
   * graph画图数据
   */
  graph?: IGraph
}
