import { Prisma, User } from '@prisma/client'

export interface UserRepository {
  CreateUser(data: Prisma.UserCreateInput): Promise<User>
  FindUserEmail(email: string): Promise<User | null>
}