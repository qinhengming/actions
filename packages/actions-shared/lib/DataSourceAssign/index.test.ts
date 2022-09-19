import { Template } from './index'
import { EAppType } from '@common/enums/EAppType'

describe('模板', () => {
  test('模板-实例', () => {
    const instance = new Template()
    expect(instance).toBeInstanceOf(Template)
  })
  test('模板-初始化', () => {
    // const instance = new Template()
    // let ins = instance.init({})
  })
  test('模板-执行', () => {
    const instance = new Template()
    let ins = instance.init({})
    let res = ins.execute({}, EAppType.Pc)
    expect(res).toBeTruthy()
  })
})
