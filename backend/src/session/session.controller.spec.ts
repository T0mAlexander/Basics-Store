import { Test, TestingModule } from '@nestjs/testing'
import { SessionController } from './session.controller'
import { SessionService } from './session.service'
import { PrismaService } from '@nest/app.service'

describe('Session Controller', () => {
  let controller: SessionController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessionController],
      providers: [PrismaService, SessionService],
    }).compile()

    controller = module.get<SessionController>(SessionController)
  })

  test('Session route controller definition', () => {
    expect(controller).toBeDefined()
  })
})
