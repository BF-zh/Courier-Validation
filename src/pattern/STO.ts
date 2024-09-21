import type { CourierPattern } from '../@types'

export const STO: CourierPattern = {
  alias: 'STO',
  name: '申通',
  reg: /^(77|43)\d{12,15}$/,
}
