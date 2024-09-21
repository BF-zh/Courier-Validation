import type { CourierPattern } from '../@types'

export const SF: CourierPattern = {
  alias: 'SF',
  name: '顺丰',
  reg: /^SF[a-z0-9]\d{12}$/i,
}
