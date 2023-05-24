import { Prisma, Seller } from '@prisma/client'

export interface SellerRepository {
  CreateSeller(data: Prisma.SellerCreateInput): Promise<Seller>
  DeleteSeller(id: string): Promise<Seller>
  FindById(id: string): Promise<Seller | null>
  FindByEmail(email: string): Promise<Seller | null>
}