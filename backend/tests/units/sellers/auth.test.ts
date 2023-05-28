import { hash } from 'bcryptjs'
import { CachedSellerRepository } from '@repositories/memory/cache-sellers.service'
import { SellerAuthServiceCase } from '@services/cases/sellers/session-auth.service'

describe('Seller session auth (UNT)', () => {
  let CacheRepository: CachedSellerRepository
  let System: SellerAuthServiceCase

  beforeEach(() => {
    CacheRepository = new CachedSellerRepository()
    System = new SellerAuthServiceCase(CacheRepository)
  })

  test('Authenticating a user session', async () => {
    await CacheRepository.CreateSeller({
      name: 'Seller',
      email: 'seller@tests.com',
      password: await hash('123456', 6)
    })

    const { Seller } = await System.AuthSeller({
      email: 'seller@tests.com',
      password: '123456'
    })

    expect(Seller.seller_id).toEqual(expect.any(String))
  })
})