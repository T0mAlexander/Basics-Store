import { randomUUID } from 'crypto'
import { UsersController } from '../users.controller'
import { UsersService } from '../users.service'
import { Test } from '@nestjs/testing'
import { User } from '@prisma/client'

describe('User Service', () => {
  let usersController: UsersController
  let usersService: UsersService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService]
    }).compile()

    usersController = moduleRef.get<UsersController>(UsersController)
    usersService = moduleRef.get<UsersService>(UsersService)
  })

  describe('Create a new user', () => {
    return null
  })
})