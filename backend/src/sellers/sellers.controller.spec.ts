import { Test, TestingModule } from '@nestjs/testing'
import { SellersController } from './sellers.controller'
import { SellersService } from './sellers.service'
import { PrismaService } from '../app.service'

describe('SellersController', () => {
  let Controller: SellersController

  beforeEach(async () => {
    const CoreModule: TestingModule = await Test.createTestingModule({
      controllers: [SellersController],
      providers: [PrismaService, SellersService],
    }).compile()

    Controller = CoreModule.get<SellersController>(SellersController)
  })

  it('should be defined', () => {
    expect(Controller).toBeDefined()
  })
})