import { Test, TestingModule } from '@nestjs/testing'
import { SellersService } from './sellers.service'
import { PrismaService } from '@nest/app.service'

describe('SellersService', () => {
  let Service: SellersService

  beforeEach(async () => {
    const CoreModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, SellersService],
    }).compile()

    Service = CoreModule.get<SellersService>(SellersService)
  })

  test('Seller service definition', () => {
    expect(Service).toBeDefined()
  })
})