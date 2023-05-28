import { CachedUserRepository } from '@repositories/memory/cache-users.service'
import { CreateUserServiceCase } from '@services/cases/users/create.service'

describe('User Tests (UNT)', () => {
  let CacheRepository: CachedUserRepository
  let System: CreateUserServiceCase

  beforeEach(() =>{
    CacheRepository = new CachedUserRepository()
    System = new CreateUserServiceCase(CacheRepository)
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