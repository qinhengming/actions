import { DataSourceEdit } from './index'
import { EAppType } from '@common/enums/EAppType'

describe('编辑数据', () => {
  test('编辑数据-实例', () => {
    const instance = new DataSourceEdit()
    expect(instance).toBeInstanceOf(DataSourceEdit)
  })
  test('编辑数据-初始化', () => {
    const instance = new DataSourceEdit()
    let ins = instance.init({ dataSourceIds: ['123'] })
    expect(ins.props.dataSourceId).toStrictEqual(['123'])
  })
  test('编辑数据-执行', () => {
    const instance = new DataSourceEdit()
    let ins = instance.init({ dataSourceIds: ['123'] })
    let res = ins.execute({}, EAppType.Pc)
    expect(res).toBeTruthy()
  })
})
