import { Prisma, User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { EmailExistsError } from '../../errors/EmailExists.error'
import { UserNotFoundError } from '../../errors/UserNotFound'
import { UserRepository } from '../user.repository'

export class CachedUserRepository implements UserRepository {
  public item: User[] = []

  async CreateUser({ name, email, password }: Prisma.UserCreateInput) {
    const EmailExists = this.item.find(user => user.email === email)
    const password_secure = await hash(password, 6)

    if(EmailExists) {
      throw new EmailExistsError()
    }

    const User = {
      id: randomUUID(),
      name, email,
      password: password_secure,
      creation_date: new Date()
    }

    this.item.push()
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
    const user = this.item.find(user => user.email === email)
    
    if (!user) {
      return null
    }

    return user
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