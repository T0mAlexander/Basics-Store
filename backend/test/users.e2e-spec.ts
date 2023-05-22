import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'

describe('User Registration (E2E)', () => {
  let NestAppInstance: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    NestAppInstance = moduleRef.createNestApplication()
    await NestAppInstance.init()
  })

  afterAll(async () => {
    await NestAppInstance.close()
  })

  test('Creating a new user', async () => {
    const response = await request(NestAppInstance.getHttpServer())
      .post('/users')
      .send({
        name: 'User',
        email: 'test@email.com',
        password: '123456'
      })

    expect(response.statusCode).toBe(201) 
  })
})