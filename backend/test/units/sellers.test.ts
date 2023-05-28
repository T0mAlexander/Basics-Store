import { CachedSellerRepository } from '@repositories/memory/cache-sellers.service'
import { SellerServiceCase } from '@services/cases/sellers/create.service'

describe('Seller Registration (UNT)', () => {
  let CacheRepository: CachedSellerRepository
  let System: SellerServiceCase

  beforeEach(() =>{
    CacheRepository = new CachedSellerRepository()
    System = new SellerServiceCase(CacheRepository)
  })

  test('Create a new seller', async () => {
    const { Seller } = await System.CreateSeller({
      name: 'Ken Thompson',
      email: 'ken@c.com',
      password: '123456'
    })

    expect(Seller.seller_id).toEqual(expect.any(String))
  })
})