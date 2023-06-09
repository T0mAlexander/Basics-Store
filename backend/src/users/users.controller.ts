/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Param, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { EmailExistsError } from '@errors/EmailExists.error'
import { UserNotFoundError } from '@errors/UserNotFound'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { UserCreationFactory } from '@factory/user/registration.factory'

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) { }

  @Post()
  async CreateUser(@Body() IncomingData: CreateUserDto, @Res() Response: Response) {
    const { name, email, password } = IncomingData

    try {
      const UserCreation = UserCreationFactory()

      const { User } = await UserCreation.CreateUser({
        name, email, password
      })

      delete User.password //* Hiding the password in API response body

      return Response.status(201).json(User)
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

  @Delete(':id')
  async DeleteUser(@Param('id') userId: string, @Res() Response: Response) {

    try {
      await this.UsersService.DeleteUser(userId)

      return Response.status(200).json({
        statusCode: Response.statusCode,
        message: 'The user has been deleted from database!'
      })
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        Response.status(404).json({
          statusCode: Response.statusCode,
          message: 'User not found in database!'
        })
      }

      throw error
    }
  }
}
