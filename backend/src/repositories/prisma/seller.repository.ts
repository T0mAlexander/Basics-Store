import { Prisma, Seller } from '@prisma/client'
import { SellerRepository } from '../seller.repository'
import { prisma } from '@lib/prisma'

export class PrismaSellerRepository implements SellerRepository {
  async CreateSeller(data: Prisma.SellerCreateInput): Promise<Seller> {
    return prisma.seller.create({ data })
  }

  async DeleteSeller(seller_id: string): Promise<Seller> {
    return prisma.seller.delete({
      where: { seller_id }
    })
  }
  async FindById(seller_id: string): Promise<Seller> {
    return prisma.seller.findUnique({
      where: { seller_id }
    })
  }
  async FindByEmail(email: string): Promise<Seller> {
    return prisma.seller.findUnique({
      where: { email }
    })
  }
  
}