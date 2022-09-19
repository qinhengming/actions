export interface IActionRes {
  data: Record<string, any> // 动作返回数据
  isSuccess: boolean // 动作是否执行成功
  isComplete: boolean // 动作是否执行完成
}
