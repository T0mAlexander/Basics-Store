import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { compare, hash } from 'bcryptjs'
import { PrismaService } from '@nest/app.service'
import { EmailExistsError } from '@errors/EmailExists.error'
import { UserNotFoundError } from '@errors/UserNotFound'
import { InvalidCredentialsError } from '@errors/InvalidCredentials.error'

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

  async AuthUser({ email, password }: User): Promise<User | null> {
    const User = await this.prisma.user.findUnique({
      where: { email }
    })

    if (!User) {
      throw new InvalidCredentialsError()
    }

    const PasswordMatch = compare(password, User.password)

    if (!PasswordMatch) {
      throw new InvalidCredentialsError()
    }

    return User
  }

  async DeleteUser(id: string): Promise<User> {
    const userIdExists = await this.prisma.user.findUnique({
      where: { id }
    })

    if(!userIdExists) {
      throw new UserNotFoundError()
    }

    const UserToDelete = await this.prisma.user.delete({
      where: { id }
    })

    return UserToDelete
  }
}