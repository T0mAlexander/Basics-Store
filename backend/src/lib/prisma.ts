import { PrismaClient } from '@prisma/client'
import { Envs } from '@env/index'

export const prisma = new PrismaClient({
  log: Envs.NODE_ENV === 'dev' ? ['query'] : []
})