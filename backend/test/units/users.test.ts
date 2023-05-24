import { CachedUserRepository } from '../../src/repositories/memory/cache-users.service'
import { UserServiceCase } from '../../src/repositories/services/users-case.service'

describe('User Registration (UNT)', () => {
  let CacheRepository: CachedUserRepository
  let System: UserServiceCase

  beforeEach(() =>{
    CacheRepository = new CachedUserRepository()
    System = new UserServiceCase(CacheRepository)
  })

  test('Create a new user', async () => {
    const { User } = await System.CreateUser({
      name: 'Linus Torvalds',
      email: 'linux@system.com',
      password: '123456'
    })

    expect(User.id).toEqual(expect.any(String))
  })
})