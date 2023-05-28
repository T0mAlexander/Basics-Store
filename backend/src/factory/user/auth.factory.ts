import { PrismaUserRepository } from '@repositories/prisma/user.repository'
import { UserAuthServiceCase } from '@services/cases/users/session-auth.service'

export function UserAuthFactory () {
  const Repository = new PrismaUserRepository()
  const UserAuth = new UserAuthServiceCase(Repository)

  return UserAuth
}