const TODO: any = 500
import type { Loot } from "../db/zod-schema"

export const TANKS = {
  drk: "Dark knight",
  war: "Warrior",
  gnb: "Gunbreaker",
  pld: "Paladin",
} as const

export type Tanks = keyof typeof TANKS

export const HEALERS = {
  whm: "White mage",
  sge: "Sage",
  ast: "Astrologian",
  sch: "Scholar",
} as const

export type Healers = keyof typeof HEALERS

export const MELEE = {
  mnk: "Monk",
  sam: "Samurai",
  drg: "Dragoon",
  nin: "Ninja",
  rpr: "Reaper",
  vpr: "Viper",
} as const

export type Melee = keyof typeof MELEE

export const RANGED = { brd: "Bard", mch: "Machinist", dnc: "Dancer" }

export type Ranged = keyof typeof RANGED
export const CASTER = {
  blm: "Black mage",
  smn: "Summoner",
  rdm: "Red mage",
  pct: "Pictomancer",
} as const

export type Caster = keyof typeof CASTER

export const JOBS = [
  ...Object.keys(TANKS),
  ...Object.keys(HEALERS),
  ...Object.keys(MELEE),
  ...Object.keys(RANGED),
  ...Object.keys(CASTER),
] as [Jobs, ...Jobs[]]

export type Jobs = Tanks | Caster | Healers | Ranged

export const WEAPON = { weapon: 500 } as const

export const LEFT_SLOTS = {
  head: 495,
  chest: 825,
  hands: 495,
  pants: 825,
  shoes: 495,
} as const

export type LeftSlots = keyof typeof LEFT_SLOTS

export type Weapon = keyof typeof WEAPON
const ACC_PRICE = 395

export const RIGHT_SLOTS = {
  earring: ACC_PRICE,
  necklace: ACC_PRICE,
  bracelet: ACC_PRICE,
  ring1: ACC_PRICE,
  ring2: ACC_PRICE,
} as const
export type RightSlots = keyof typeof RIGHT_SLOTS

export const WEAPON_TOMES_COST = 500

export const ALL_EQUIP = {
  ...WEAPON,
  ...LEFT_SLOTS,
  ...RIGHT_SLOTS,
}

export type Equipemnt = keyof typeof ALL_EQUIP

export const people = [
  "Saturn",
  "Rine",
  "Peitra",
  "Riful",
  "Jellal",
  "Miguel",
  "Nox",
  "Linneth",
] as const
export type Persons = (typeof people)[number]

export const ROLES = {
  tankSupport: Object.keys(TANKS) as Tanks[],
  healerSupport: Object.keys(HEALERS) as Healers[],
  meleeDps: Object.keys(MELEE) as Melee[],
  rangedDps: Object.keys(RANGED) as Ranged[],
  casterDps: Object.keys(CASTER) as Caster[],
} as const

export type Roles = keyof typeof ROLES

export const TOME_STATES = ["To buy", "Bought with tomes", "Upgraded"] as const

export type TomeStates = (typeof TOME_STATES)[number]
export const SAVAGE_STATES = [
  "To drop",
  "Dropped",
  "Bought with tokens",
] as const
export type SavageStates = (typeof SAVAGE_STATES)[number]

export const EQUIP_STATES = [
  ...TOME_STATES,
  ...SAVAGE_STATES,
] as const satisfies [
  TomeStates | SavageStates,
  ...(TomeStates | SavageStates)[],
]

export const EMPTY_BIS = {
  bracelet: "To drop",
  chest: "To drop",
  earring: "To drop",
  head: "To drop",
  hands: "To drop",
  pants: "To drop",
  ring1: "To drop",
  ring2: "To drop",
  shoes: "To drop",
  weapon: "To drop",
  necklace: "To drop",
} satisfies Omit<Loot, "tier" | "isBis" | "id" | "user">
export const EMPTY_CLASSES = {
  drk: 0,
  war: 0,
  gnb: 0,
  pld: 0,
  whm: 0,
  sge: 0,
  ast: 0,
  sch: 0,
  mnk: 0,
  sam: 0,
  drg: 0,
  nin: 0,
  rpr: 0,
  vpr: 0,
  brd: 0,
  mch: 0,
  dnc: 0,
  blm: 0,
  smn: 0,
  rdm: 0,
  pct: 0,
}
