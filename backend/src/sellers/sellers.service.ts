import { Injectable } from '@nestjs/common'
import { Prisma, Seller } from '@prisma/client'
import { hash } from 'bcryptjs'
import { PrismaService } from '../app.service'
import { EmailExistsError } from '../errors/EmailExists.error'
import { SellerNotFoundError } from '../errors/SellerNotFound'

@Injectable()
export class SellersService {
  constructor (private prisma: PrismaService) {}

  async CreateSeller({ seller_id, name, email, password, creation_date }: Prisma.SellerCreateInput): Promise<Seller> {
    const password_secure = await hash(password, 6)

    const EmailExists = await this.prisma.seller.findUnique({
      where: { email }
    })

    if (EmailExists) {
      throw new EmailExistsError()
    }

    const Seller = await this.prisma.seller.create({
      data: {
        seller_id,
        name,
        email,
        password: password_secure,
        creation_date
      }
    })

    return Seller
  }

  async DeleteUser(seller_id: string): Promise<Seller> {
    const sellerIdExists = await this.prisma.seller.findUnique({
      where: { seller_id }
    })

    if(!sellerIdExists) {
      throw new SellerNotFoundError()
    }

    const SellerToDelete = await this.prisma.seller.delete({
      where: { seller_id }
    })

    return SellerToDelete
  }

}
