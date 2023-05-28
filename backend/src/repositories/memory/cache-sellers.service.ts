import { Prisma, Seller } from '@prisma/client'
import { randomUUID } from 'crypto'
import { EmailExistsError } from '@errors/EmailExists.error'
import { UserNotFoundError } from '@errors/UserNotFound'
import { SellerRepository } from '../seller.repository'

export class CachedSellerRepository implements SellerRepository {
  public item: Seller[] = []

  async CreateSeller({ name, email, password }: Prisma.SellerCreateInput) {
    const EmailExists = this.item.find(seller => seller.email === email)

    if(EmailExists) {
      throw new EmailExistsError()
    }

    const Seller = {
      seller_id: randomUUID(),
      name, email,
      password,
      creation_date: new Date()
    }

    this.item.push(Seller)
    return Seller
  }

  async DeleteSeller(id: string): Promise<Seller> {
    const seller = this.item.find(seller => seller.seller_id === id)

    if(!seller) {
      throw new UserNotFoundError()
    } else {
      const SellerFound = this.item.shift()

      return SellerFound
    }
  }

  async FindByEmail(email: string): Promise<Seller | null> {
    const seller = this.item.find(seller => seller.email === email)
    
    if (!seller) {
      return null
    }

    return seller
  }

  async FindById(id: string): Promise<Seller | null> {
    const seller = this.item.find(seller => seller.seller_id === id)
    
    if (!seller) {
      throw new UserNotFoundError()
    } else {
      return seller
    }
  }
}