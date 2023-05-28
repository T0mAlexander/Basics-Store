import { User } from '@prisma/client'
import { compare } from 'bcryptjs'
import { InvalidCredentialsError } from '@errors/InvalidCredentials.error'
import { PrismaUserRepository } from '@repositories/prisma/user.repository'

interface AuthRequest {
  email: string
  password: string
}

interface AuthResponse {
  User: User
}

export class UserAuthServiceCase {
  constructor(private repository: PrismaUserRepository) {}

  async AuthUser({ email, password }: AuthRequest): Promise<AuthResponse> {
    const User = await this.repository.FindByEmail(email)

    if (!User) {
      throw new InvalidCredentialsError()
    }

    const PasswordMatch = await compare(password, User.password)

    if (!PasswordMatch) {
      throw new InvalidCredentialsError()
    }

    return { User }
  }
}