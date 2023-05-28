import { Test, TestingModule } from '@nestjs/testing'
import { SessionService } from './session.service'
import { PrismaService } from '@nest/app.service'

describe('Session Service', () => {
  let service: SessionService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, SessionService],
    }).compile()

    service = module.get<SessionService>(SessionService)
  })

  test('Session service definition', () => {
    expect(service).toBeDefined()
  })
})
