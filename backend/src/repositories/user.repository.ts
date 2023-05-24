import { Prisma, User } from '@prisma/client'

export interface UserRepository {
  CreateUser(data: Prisma.UserCreateInput): Promise<User>
  DeleteUser(id: string): Promise<User>
  FindById(id: string): Promise<User | null>
  FindByEmail(email: string): Promise<User | null>
}