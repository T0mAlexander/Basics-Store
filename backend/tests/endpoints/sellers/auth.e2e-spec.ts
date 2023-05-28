import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from '@nest/app.module'

describe('Seller session auth (E2E)', () => {
  let NestAppInstance: INestApplication
  let sellerId: string

  beforeAll(async () => {
    const CoreModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    NestAppInstance = CoreModule.createNestApplication()
    await NestAppInstance.init()

    const seller = await request(NestAppInstance.getHttpServer())
      .post('/sellers')
      .send({
        name: 'Seller',
        email: 'seller@email.com',
        password: '123456'
      })

    sellerId = seller.body.seller_id
  })

  afterAll(async () => {
    // Deleting the seller after the test
    await request(NestAppInstance.getHttpServer())
      .delete(`/sellers/${sellerId}`
      ).expect(200)

    // Ending the Nest.js server instance
    await NestAppInstance.close()
  })

  test('Authenticating a seller session', async () => {
    const response = await request(NestAppInstance.getHttpServer())
      .post('/auth/seller')
      .send({
        email: 'seller@email.com',
        password: '123456'
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      token: expect.any(String)
    })
  })
})