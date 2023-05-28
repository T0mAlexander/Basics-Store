import { Envs } from '@env/index'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: Envs.NODE_ENV === 'dev' ? ['query'] : []
})