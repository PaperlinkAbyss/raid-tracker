import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { ALL_EQUIP, EQUIP_STATES, JOBS } from "../constants"

// This will be mostly for reference and probably updated once every 3 years
export const jobs = sqliteTable("jobs", {
  name: text("jobName").primaryKey(),
  role: text("jobRole").notNull(),
})

export const users = sqliteTable("users", {
  id: text("id").primaryKey().primaryKey().unique(),
  name: text("name").notNull(),
  role: text("role", {
    enum: [
      "tankSupport",
      "healerSupport",
      "meleeDps",
      "rangedDps",
      "casterDps",
    ],
  }).notNull(), // This will need an update to waterfall all raid configurations.
  job: text("job", { enum: JOBS }).notNull(),
  jobsState: text("jobsState")
    .notNull()
    .references(() => levels.id),
  bis: text("bis")
    .notNull()
    .references(() => loot.id),
  lootState: text("lootState")
    .notNull()
    .references(() => loot.id),
})

export const loot = sqliteTable("lootTable", {
  weapon: text("weapon", { enum: EQUIP_STATES }).notNull(),
  head: text("head", { enum: EQUIP_STATES }).notNull(),
  chest: text("chest", { enum: EQUIP_STATES }).notNull(),
  hands: text("hands", { enum: EQUIP_STATES }).notNull(),
  pants: text("pants", { enum: EQUIP_STATES }).notNull(),
  shoes: text("shoes", { enum: EQUIP_STATES }).notNull(),
  earring: text("earring", { enum: EQUIP_STATES }).notNull(),
  necklace: text("necklace", { enum: EQUIP_STATES }).notNull(),
  bracelet: text("bracelet", { enum: EQUIP_STATES }).notNull(),
  ring1: text("ring1", { enum: EQUIP_STATES }).notNull(),
  ring2: text("ring2", { enum: EQUIP_STATES }).notNull(),
  tier: text("tier")
    .notNull()
    .references(() => tiers.id),
  id: text("id").primaryKey().unique(),
  user: text("user").notNull(),
  isBis: integer("isBis", { mode: "boolean" }).notNull(),
})

export const tiers = sqliteTable("tiers", {
  id: text("id").primaryKey().unique(),
  name: text("name").notNull(),
  tierAbreviation: text("tierAbreviation").notNull(),
  patch: text("patch").notNull(),
  maxLevel: integer("maxLevel", { mode: "number" }).notNull(),
  current: integer("current", { mode: "boolean" }).notNull(),
})

export const bis = sqliteTable("bis", {
  id: text("id").primaryKey().unique(),
  user: text("user")
    .notNull()
    .references(() => users.id),
  tier: text("tier")
    .notNull()
    .references(() => tiers.id),
  item: text("item")
    .notNull()
    .references(() => loot.id),
  lootId: text("lootId")
    .notNull()
    .references(() => loot.id),
})

export const levels = sqliteTable("levels", {
  id: text("id").primaryKey().unique(),
  drk: integer("drk", { mode: "number" }).notNull().default(0),
  war: integer("war", { mode: "number" }).notNull().default(0),
  gnb: integer("gnb", { mode: "number" }).notNull().default(0),
  pld: integer("pld", { mode: "number" }).notNull().default(0),
  whm: integer("whm", { mode: "number" }).notNull().default(0),
  sge: integer("sge", { mode: "number" }).notNull().default(0),
  ast: integer("ast", { mode: "number" }).notNull().default(0),
  sch: integer("sch", { mode: "number" }).notNull().default(0),
  mnk: integer("mnk", { mode: "number" }).notNull().default(0),
  sam: integer("sam", { mode: "number" }).notNull().default(0),
  drg: integer("drg", { mode: "number" }).notNull().default(0),
  nin: integer("nin", { mode: "number" }).notNull().default(0),
  rpr: integer("rpr", { mode: "number" }).notNull().default(0),
  vpr: integer("vpr", { mode: "number" }).notNull().default(0),
  brd: integer("brd", { mode: "number" }).notNull().default(0),
  mch: integer("mch", { mode: "number" }).notNull().default(0),
  dnc: integer("dnc", { mode: "number" }).notNull().default(0),
  blm: integer("blm", { mode: "number" }).notNull().default(0),
  smn: integer("smn", { mode: "number" }).notNull().default(0),
  rdm: integer("rdm", { mode: "number" }).notNull().default(0),
  pct: integer("pct", { mode: "number" }).notNull().default(0),
})
