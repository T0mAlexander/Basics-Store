import { Injectable } from '@nestjs/common'
import { User, Prisma } from '@prisma/client'
import { PrismaService } from './prisma.service'

@Injectable()
class UserPrismaService {
  constructor(private prisma: PrismaService) { }

  async user(userUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userUniqueInput
    })
  }
}