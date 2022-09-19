import { DataSourceDelete } from './index'
import { EAppType } from '@common/enums/EAppType'

describe('删除数据', () => {
  test('删除数据-实例', () => {
    const instance = new DataSourceDelete()
    expect(instance).toBeInstanceOf(DataSourceDelete)
  })
  test('删除数据-初始化', () => {
    const instance = new DataSourceDelete()
    let ins = instance.init({ dataSourceIds: ['123'] })
    expect(ins.props.dataSourceId).toStrictEqual(['123'])
  })
  test('删除数据-执行', () => {
    const instance = new DataSourceDelete()
    let ins = instance.init({ dataSourceIds: ['123'] })
    let res = ins.execute({}, EAppType.Pc)
    expect(res).toBeTruthy()
  })
})
