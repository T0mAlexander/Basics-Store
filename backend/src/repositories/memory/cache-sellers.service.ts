import { Prisma, Seller } from '@prisma/client'
import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { EmailExistsError } from '@errors/EmailExists.error'
import { UserNotFoundError } from '@errors/UserNotFound'
import { SellerRepository } from '../seller.repository'

export class CachedSellerRepository implements SellerRepository {
  public item: Seller[] = []

  async CreateSeller({ name, email, password }: Prisma.SellerCreateInput) {
    const EmailExists = this.item.find(user => user.email === email)
    const password_secure = await hash(password, 6)

    if(EmailExists) {
      throw new EmailExistsError()
    }

    const User = {
      seller_id: randomUUID(),
      name, email,
      password: password_secure,
      creation_date: new Date()
    }

    this.item.push()
    return User
  }

  async DeleteSeller(id: string): Promise<Seller> {
    const seller = this.item.find(seller => seller.seller_id === id)

    if(!seller) {
      throw new UserNotFoundError()
    } else {
      const UserFound = this.item.shift()

      return UserFound
    }
  }

  async FindByEmail(email: string): Promise<Seller | null> {
    const user = this.item.find(user => user.email === email)
    
    if (!user) {
      return null
    }

    return user
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