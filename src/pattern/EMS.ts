import type { CourierPattern } from '../@types'

export const EMS: CourierPattern = {
  alias: 'EMS',
  name: '邮政',
  reg: /^[981]\d{12}$|^P[a-z]\d{11}$/i,
}
