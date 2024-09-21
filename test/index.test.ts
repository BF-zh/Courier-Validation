import { describe, expect, it } from 'vitest'
import { courier } from '../src/courier'

describe('更具快递单号获取快递公司名称', () => {
  it('中通快递', () => {
    expect(courier.get('73610555582883').name).toEqual('中通')
  })
  it('圆通快递', () => {
    expect(courier.get('YT8962646785389').name).toEqual('圆通')
  })
  it('顺丰快递', () => {
    expect(courier.get('SF1385628716739').name).toEqual('顺丰')
  })
  it('申通快递', () => {
    expect(courier.get('773277027280336').name).toEqual('申通')
  })
  it('德邦快递', () => {
    expect(courier.get('DPK202252612836').name).toEqual('德邦')
  })
  it('韵达快递', () => {
    expect(courier.get('463431409940372').name).toEqual('韵达')
  })
  it('邮政快递', () => {
    expect(courier.get('1207119765021').name).toEqual('邮政')
  })
  it('京东快递', () => {
    expect(courier.get('JDX024407261700').name).toEqual('京东')
  })
  it('极兔快递', () => {
    expect(courier.get('JT5261988016578').name).toEqual('极兔')
  })
  it('未知快递', () => {
    expect(courier.get('5685685685685685').name).toEqual('未知')
  })
})

describe('验证快递单号是否合法', () => {
  it('中通快递', () => {
    expect(courier.validate('CN', '73610555582883')).toEqual(false)
  })
  it('圆通快递', () => {
    expect(courier.validate('YTO', 'YT8962646785389')).toEqual(true)
  })
  it('顺丰快递', () => {
    expect(courier.validate('SF', 'SF1385628716739')).toEqual(true)
  })
  it('申通快递', () => {
    expect(courier.validate('STO', '773277027280336')).toEqual(true)
  })
  it('德邦快递', () => {
    expect(courier.validate('DPK', 'DPK202252612836')).toEqual(true)
  })
  it('韵达快递', () => {
    expect(courier.validate('YUNDA', '463431409940372')).toEqual(true)
  })
  it('邮政快递', () => {
    expect(courier.validate('EMS', '1207119765021')).toEqual(true)
  })
  it('京东快递', () => {
    expect(courier.validate('JD', 'JDX024407261700')).toEqual(true)
  })
  it('极兔快递', () => {
    expect(courier.validate('JT', 'JT5261988016578')).toEqual(true)
  })
  it('未知快递', () => {
    expect(courier.validate('CN', '5685685685685685')).toEqual(false)
  })
})
