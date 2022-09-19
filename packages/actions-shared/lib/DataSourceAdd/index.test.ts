import { DataSourceAdd } from './index'
import { EAppType } from '@common/enums/EAppType'

describe('新增数据', () => {
  test('新增数据-实例', () => {
    const instance = new DataSourceAdd()
    expect(instance).toBeInstanceOf(DataSourceAdd)
  })
  test('新增数据-初始化', () => {
    const instance = new DataSourceAdd()
    let ins = instance.init({ dataSourceIds: ['123'] })
    expect(ins.props.dataSourceId).toStrictEqual(['123'])
  })
  test('新增数据-执行', () => {
    const instance = new DataSourceAdd()
    let ins = instance.init({ dataSourceIds: ['123'] })
    let res = ins.execute({}, EAppType.Pc)
    expect(res).toBeTruthy()
  })
})
