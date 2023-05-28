import { hash } from 'bcryptjs'
import { CachedUserRepository } from '@repositories/memory/cache-users.service'
import { UserAuthServiceCase } from '@services/cases/users/session-auth.service'

describe('Session authentication (UNT)', () => {
  let CacheRepository: CachedUserRepository
  let System: UserAuthServiceCase

  beforeEach(() => {
    CacheRepository = new CachedUserRepository()
    System = new UserAuthServiceCase(CacheRepository)
  })

  test('Authenticating a user session', async () => {
    await CacheRepository.CreateUser({
      name: 'User',
      email: 'user@tests.com',
      password: await hash('123456', 6)
    })

    const { User } = await System.AuthUser({
      email: 'user@tests.com',
      password: '123456'
    })

    expect(User.id).toEqual(expect.any(String))
  })
})