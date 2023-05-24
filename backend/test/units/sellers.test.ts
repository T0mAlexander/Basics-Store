import { CachedSellerRepository } from '../../src/repositories/memory/cache-sellers.service'
import { SellerServiceCase } from '../../src/repositories/services/sellers-case.service'

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