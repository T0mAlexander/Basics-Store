import { AppModule } from '@nest/app.module'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { Test } from '@nestjs/testing'

describe('User session auth (E2E)', () => {
  let NestAppInstance: INestApplication
  let userId: string

  beforeAll(async () => {
    const CoreModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    NestAppInstance = CoreModule.createNestApplication()
    await NestAppInstance.init()

    const user = await request(NestAppInstance.getHttpServer())
      .post('/users/')
      .send({
        name: 'User',
        email: 'user@email.com',
        password: '123456'
      })

    userId = user.body.id
  })

  afterAll(async () => {
    // Deleting the user after the test
    await request(NestAppInstance.getHttpServer())
      .delete(`/users/${userId}`
      ).expect(200)

    // Ending the Nest.js server instance
    await NestAppInstance.close()
  })

  test('Authenticating a user session', async () => {
    const response = await request(NestAppInstance.getHttpServer())
      .post('/auth/user')
      .send({
        email: 'user@email.com',
        password: '123456'
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      token: expect.any(String)
    })
  })
})