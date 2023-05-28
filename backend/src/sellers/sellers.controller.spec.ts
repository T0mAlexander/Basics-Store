import { Test, TestingModule } from '@nestjs/testing'
import { SellersController } from './sellers.controller'
import { SellersService } from './sellers.service'
import { PrismaService } from '@nest/app.service'

describe('SellersController', () => {
  let Controller: SellersController

  beforeEach(async () => {
    const CoreModule: TestingModule = await Test.createTestingModule({
      controllers: [SellersController],
      providers: [PrismaService, SellersService],
    }).compile()

    Controller = CoreModule.get<SellersController>(SellersController)
  })

  test('Seller route controller definition', () => {
    expect(Controller).toBeDefined()
  })
})