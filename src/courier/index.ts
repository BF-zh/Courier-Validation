import type { CourierPattern } from '../@types'
import * as Patten from '../pattern'

type CourierName = keyof typeof Patten

export type CourierItem = CourierPattern
/**
 * 快递查询
 */
class Courier {
  private Pattens = Object.values(Patten)
  public get(order: string): CourierItem {
    return this.Pattens.find(patten => patten.reg.test(order)) || { name: '未知', reg: /.*/, alias: 'wz' }
  }

  /**
   * 验证快递单号是否有效
   * @param name 快递公司名称
   * @param order 订单号
   */
  public validate(name: CourierName, order: string): boolean {
    return Patten[name] && Patten[name].reg.test(order)
  }
}

export const courier = new Courier()
