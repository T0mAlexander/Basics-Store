import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'crypto'
import { EmailExistsError } from '@errors/EmailExists.error'
import { UserNotFoundError } from '@errors/UserNotFound'
import { UserRepository } from '../user.repository'

export class CachedUserRepository implements UserRepository {
  public item: User[] = []

  async CreateUser({ name, email, password }: Prisma.UserCreateInput) {
    const EmailExists = this.item.find(user => user.email === email)

    if(EmailExists) {
      throw new EmailExistsError()
    }

    const User = {
      id: randomUUID(),
      name, email,
      password,
      creation_date: new Date()
    }

    this.item.push(User)
    return User
  }

  async DeleteUser(id: string): Promise<User> {
    const userIdExists = this.item.find(user => user.id === id)

    if(!userIdExists) {
      throw new UserNotFoundError()
    } else {
      const UserFound = this.item.shift()

      return UserFound
    }
  }

  async FindByEmail(email: string): Promise<User | null> {
    const User = this.item.find(user => user.email === email)
    
    if (!User) {
      return null
    }

    return User
  }

  async FindById(id: string): Promise<User | null> {
    const idExistence = this.item.find(user => user.id === id)
    
    if (!idExistence) {
      throw new UserNotFoundError()
    } else {
      return idExistence
    }
  }
}