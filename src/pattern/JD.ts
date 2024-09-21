import type { CourierPattern } from '../@types'

export const JD: CourierPattern = {
  alias: 'JD',
  name: '京东',
  reg: /^JD[a-z0-9]{2}\d{11}$/i,
}
