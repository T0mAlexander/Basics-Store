import { Seller } from '@prisma/client'
import { compare } from 'bcryptjs'
import { InvalidCredentialsError } from '@errors/InvalidCredentials.error'
import { PrismaSellerRepository } from '@repositories/prisma/seller.repository'

interface AuthRequest {
  email: string
  password: string
}

interface AuthResponse {
  Seller: Seller
}

export class SellerAuthServiceCase {
  constructor(private prisma: PrismaSellerRepository) {}

  async AuthSeller({ email, password }: AuthRequest): Promise<AuthResponse> {
    const Seller = await this.prisma.FindByEmail(email)

    if (!Seller) {
      throw new InvalidCredentialsError()
    }

    const PasswordMatch = await compare(password, Seller.password)

    if (!PasswordMatch) {
      throw new InvalidCredentialsError()
    }

    return { Seller }
  }
}