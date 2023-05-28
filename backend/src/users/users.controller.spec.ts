import { Test, TestingModule } from '@nestjs/testing'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { PrismaService } from '@nest/app.service'

describe('User Routing Controller', () => {
  let Controller: UsersController

  beforeEach(async () => {
    const CoreModule: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [PrismaService, UsersService]
    }).compile()

    Controller = CoreModule.get<UsersController>(UsersController)
  })

  test('Users route controller definition', () => {
    expect(Controller).toBeDefined()
  })
})