import { ALL_EQUIP } from "../constants"

export default function getPrice(equip: keyof typeof ALL_EQUIP) {
  const value = ALL_EQUIP[equip]
  if (!value) throw "No equip found"
  return value
}
