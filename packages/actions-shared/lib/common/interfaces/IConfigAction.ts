import { EActionType } from "../enums/EActionType";
import { EGroupName } from "../enums/EGroupName";

export interface IConfigAction {
  /**
   * 动作名称
   */
  typeName: EActionType
  /**
   * 显示名称
   */
  displayName: string
  /**
   * 描述
   */
  marks: string
  /**
   * 全拼搜索
   */
  pinyin: string
  /**
   * 简拼搜索
   */
  pinyinAbbr: string
  /**
   * 展示顺序
   */
  index: number
  /**
   * 动作分组
   */
  groupName: EGroupName
  /**
   * 动作属性
   */
  props?: Record<string,any>
}
