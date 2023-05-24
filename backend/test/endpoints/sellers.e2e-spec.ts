import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from '../../src/app.module'

describe('Seller Registration (E2E)', () => {
  let NestAppInstance: INestApplication
  let sellerId: string

  beforeAll(async () => {
    const CoreModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    NestAppInstance = CoreModule.createNestApplication()
    await NestAppInstance.init()
  })

  afterAll(async () => {
    // Deleting the seller after the test
    await request(NestAppInstance.getHttpServer())
      .delete(`/sellers/${sellerId}`
      ).expect(200)

    // Ending the Nest.js server instance
    await NestAppInstance.close()
  })

  test('Creating a new seller', async () => {
    const response = await request(NestAppInstance.getHttpServer())
      .post('/sellers')
      .send({
        name: 'Seller',
        email: 'seller@email.com',
        password: '123456'
      })

    expect(response.statusCode).toBe(201)
    sellerId = response.body.seller_id
  })
})