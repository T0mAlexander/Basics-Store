import { Injectable } from '@nestjs/common'
import { PrismaService } from '@nest/app.service'
import { User, Seller } from '@prisma/client'
import { InvalidCredentialsError } from '@errors/InvalidCredentials.error'
import { compare } from 'bcryptjs'

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async AuthUser({ email, password }: User): Promise<User> {
    const User = await this.prisma.user.findUnique({
      where: { email }
    })

    if(!User) {
      throw new InvalidCredentialsError()
    }

    const PasswordMatch = await compare(password, User.password)

    if(!PasswordMatch) {
      throw new InvalidCredentialsError()
    }

    return User
  }

  async AuthSeller({ email, password }: Seller): Promise<Seller> {
    const Seller = await this.prisma.seller.findUnique({
      where: { email }
    })

    if(!Seller) {
      throw new InvalidCredentialsError()
    }

    const PasswordMatch = await compare(password, Seller.password)

    if(!PasswordMatch) {
      throw new InvalidCredentialsError()
    }

    return Seller
  }
}
