import { EmailExistsError } from '../../errors/EmailExists.error'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { UserRepository } from '../user.repository'

interface RegisterRequest {
  name: string
  email: string
  password: string
}

interface RegisterResponse {
  User: User
}

export class UserServiceCase {
  constructor(private repository: UserRepository) { }

  async CreateUser({ name, email, password }: RegisterRequest): Promise<RegisterResponse> {
    const password_secure = await hash(password, 6)

    const EmailExists = await this.repository.FindByEmail(email)

    if(EmailExists) {
      throw new EmailExistsError()
    } else {
      const User = await this.repository.CreateUser({
        name,
        email,
        password: password_secure
      })

      return { User }
    }
  }
}