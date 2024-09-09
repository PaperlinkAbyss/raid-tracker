import { db } from "."
import { levels, loot, tiers, users } from "./db-schema"
import { type User, createUserSchema } from "./zod-schema"
import getRole from "../utils/getRole"
import { EMPTY_BIS, EMPTY_CLASSES, type Jobs } from "../constants"
import { eq } from "drizzle-orm"

export async function createUser(user: Pick<User, "job" | "name">) {
  const safeUser = createUserSchema.safeParse(user)
  if (!safeUser.success) throw "Not valid user"
  const { job, name } = safeUser.data
  const role = getRole(safeUser.data.job)
  const id = crypto.randomUUID()
  db.transaction(async () => {
    const tier = await getCurrentTier()
    if (!tier) throw "No tier configured"
    const tableInfo = await createBiS(id, tier.id)
    const jobState = await createJobStates(job, tier.maxLevel)
    await db.insert(users).values({
      job,
      name,
      id,
      bis: tableInfo.bis,
      lootState: tableInfo.loot,
      role,
      jobsState: jobState.id,
    })
  })
}

export async function createBiS(userId: string, tier: string) {
  return await db.transaction(async () => {
    const bisId = crypto.randomUUID()
    const lootId = crypto.randomUUID()
    await db.insert(loot).values({
      ...EMPTY_BIS,
      tier,
      user: userId,
      id: bisId,
      isBis: true,
    })
    await db
      .insert(loot)
      .values({ ...EMPTY_BIS, isBis: false, tier, user: userId, id: lootId })
    return { bis: bisId, loot: lootId }
  })
}

export async function getCurrentTier() {
  return await db.query.tiers.findFirst({ where: eq(tiers.current, true) })
}

export async function createJobStates(job: Jobs, max: number) {
  return await db
    .insert(levels)
    .values({ ...EMPTY_CLASSES, [job]: max, id: crypto.randomUUID() })
    .returning({ id: levels.id })
    .then((r) => r[0])
}
