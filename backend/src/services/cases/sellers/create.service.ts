import { EmailExistsError } from '@errors/EmailExists.error'
import { Seller } from '@prisma/client'
import { hash } from 'bcryptjs'
import { SellerRepository } from '@repositories/seller.repository'

interface RegisterRequest {
  name: string
  email: string
  password: string
}

interface RegisterResponse {
  Seller: Seller
}

export class SellerServiceCase {
  constructor(private repository: SellerRepository) { }

  async CreateSeller({ name, email, password }: RegisterRequest): Promise<RegisterResponse> {
    const password_secure = await hash(password, 6)

    const EmailExists = await this.repository.FindByEmail(email)

    if(EmailExists) {
      throw new EmailExistsError()
    } else {
      const Seller = await this.repository.CreateSeller({
        name,
        email,
        password: password_secure
      })

      return { Seller }
    }
  }
}