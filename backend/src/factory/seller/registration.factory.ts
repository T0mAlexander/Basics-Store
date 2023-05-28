import { PrismaSellerRepository } from '@repositories/prisma/seller.repository'
import { CreateSellerServiceCase } from '@services/cases/sellers/create.service'

export function SellerCreationFactory () {
  const Repository = new PrismaSellerRepository()
  const SellerCreation = new CreateSellerServiceCase(Repository)

  return SellerCreation
}