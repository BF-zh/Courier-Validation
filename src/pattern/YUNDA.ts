import type { CourierPattern } from '../@types'

export const YUNDA: CourierPattern = {
  alias: 'YUNDA',
  name: '韵达',
  reg: /^[34]\d{14}$|^5\d{12}$/,
}
