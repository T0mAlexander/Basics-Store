import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'crypto'
import { UserRepository } from './../../repository/user.repository'

export class CacheUserRepository implements UserRepository {
  public item: User[] = []

  async FindUserEmail(email: string): Promise<User | null> {
    const user = this.item.find(data => data.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async CreateUser({ name, email, password }: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: randomUUID(),
      name, email, password,
      creation_date: new Date()
    }

    this.item.push(user)
    return user
  }
}