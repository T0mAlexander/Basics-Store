import { Body, Controller, Post, Res } from '@nestjs/common'
import { UsersService } from './users.service'
import { Response } from 'express'
import { EmailExistsError } from './errors/EmailExists.error'
import CreateUserDto from './dto/create-user.dto'
import { randomUUID } from 'crypto'

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) { }

  @Post()
  async CreateUser(@Body() IncomingData: CreateUserDto, @Res() Response: Response) {
    const { name, email, password } = IncomingData

    try {
      const newUser = await this.UsersService.CreateUser({
        id: randomUUID(),
        name,
        email,
        password,
        creation_date: new Date()
      })

      delete newUser.password //* Hiding the password in API response body

      return Response.status(201).json(newUser)
    } catch (error) {
      if (error instanceof EmailExistsError) {
        Response.status(409).json({
          statusCode: Response.statusCode,
          message: 'This email already exists!',
        })
      }

      throw error
    }
  }
}
