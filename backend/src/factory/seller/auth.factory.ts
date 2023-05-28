import { PrismaSellerRepository } from '@repositories/prisma/seller.repository'
import { SellerAuthServiceCase } from '@services/cases/sellers/session-auth.service'

export function SellerAuthFactory () {
  const Service = new PrismaSellerRepository()
  const SellerAuthentication = new SellerAuthServiceCase(Service)

  return SellerAuthentication
}