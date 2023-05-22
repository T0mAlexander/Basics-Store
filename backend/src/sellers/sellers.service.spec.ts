import { Test, TestingModule } from '@nestjs/testing'
import { SellersService } from './sellers.service'
import { PrismaService } from '../app.service'

describe('SellersService', () => {
  let service: SellersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, SellersService],
    }).compile()

    service = module.get<SellersService>(SellersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
