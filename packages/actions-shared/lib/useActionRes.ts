import { IActionRes } from '@common'

export function useActionRes() {
  let res: IActionRes
  res = {
    data: {},
    isSuccess: true,
    isComplete: true
  }
  return res
}
