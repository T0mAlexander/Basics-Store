import { Test, TestingModule } from '@nestjs/testing'
import { SellersService } from './sellers.service'
import { PrismaService } from '../app.service'

describe('SellersService', () => {
  let Service: SellersService

  beforeEach(async () => {
    const CoreModule: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, SellersService],
    }).compile()

    Service = CoreModule.get<SellersService>(SellersService)
  })

  it('Seller service definition', () => {
    expect(Service).toBeDefined()
  })
})