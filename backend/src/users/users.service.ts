import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { EmailExistsError } from './errors/EmailExists.error'
import { PrismaService } from '../app.service'

@Injectable()
export class UsersService {
  constructor (private prisma: PrismaService) {}

  async CreateUser({ id, name, email, password, creation_date }: Prisma.UserCreateInput): Promise<User> {
    const password_secure = await hash(password, 6)

    const EmailExists = await this.prisma.user.findUnique({
      where: { email }
    })

    if (EmailExists) {
      throw new EmailExistsError()
    }

    const User = await this.prisma.user.create({
      data: {
        id,
        name,
        email,
        password: password_secure,
        creation_date
      }
    })

    return User
  }

}