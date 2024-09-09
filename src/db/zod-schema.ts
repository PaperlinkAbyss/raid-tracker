import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { levels, loot, tiers, users } from "./db-schema"
import { z } from "zod"

export const insertUserSchema = createInsertSchema(users)

export const createUserSchema = insertUserSchema.pick({
  job: true,
  name: true,
})

export type User = z.infer<typeof insertUserSchema>

export const selectUserSchema = createSelectSchema(users)

export const insertJobSchema = createInsertSchema(levels)

export type Job = z.infer<typeof insertJobSchema>

export const selectJobSchema = createSelectSchema(levels)

export const insertLootSchema = createInsertSchema(loot)

export type Loot = z.infer<typeof insertLootSchema>

export const selectLootSchema = createSelectSchema(loot)

export const createInsertTierSchema = createInsertSchema(tiers)

export type Tier = z.infer<typeof createInsertTierSchema>

export const createSelectTierSchema = createSelectSchema(tiers)
