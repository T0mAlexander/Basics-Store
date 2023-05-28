import { Prisma, User } from '@prisma/client'
import { UserRepository } from '../user.repository'
import { prisma } from '@lib/prisma'

export class PrismaUserRepository implements UserRepository {
  async CreateUser(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({ data })
  }

  async DeleteUser(id: string): Promise<User> {
    return prisma.user.delete({
      where: { id }
    })
  }
  async FindById(id: string): Promise<User> {
    return prisma.user.findUnique({
      where: { id }
    })
  }
  async FindByEmail(email: string): Promise<User> {
    return prisma.user.findUnique({
      where: { email }
    })
  }
}