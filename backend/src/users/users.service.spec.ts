import { Test, TestingModule } from '@nestjs/testing'
import { UsersService } from './users.service'
import { PrismaService } from '../app.service'

describe('User Routing Controller', () => {
  let Service: UsersService

  beforeEach(async () => {
    const CoreModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, UsersService]
    }).compile()

    Service = CoreModule.get<UsersService>(UsersService)
  })

  test('Service defition', () => {
    expect(Service).toBeDefined()
  })
})