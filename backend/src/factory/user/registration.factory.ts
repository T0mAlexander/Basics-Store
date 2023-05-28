import { PrismaUserRepository } from '@repositories/prisma/user.repository'
import { CreateUserServiceCase } from '@services/cases/users/create.service'

export function UserCreationFactory () {
  const Repository = new PrismaUserRepository()
  const UserCreation = new CreateUserServiceCase(Repository)

  return UserCreation
}