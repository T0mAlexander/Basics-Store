/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Param, Post, Res } from '@nestjs/common'
import { randomUUID } from 'crypto'
import { Response } from 'express'
import { EmailExistsError } from '@errors/EmailExists.error'
import { SellerNotFoundError } from '@errors/SellerNotFound'
import { CreateSellerDto } from './dto/create-seller.dto'
import { SellersService } from './sellers.service'
import { SellerCreationFactory } from '@factory/seller/registration.factory'

@Controller('sellers')
export class SellersController {
  constructor(private readonly SellersService: SellersService) { }

  @Post()
  async CreateUser(@Body() IncomingData: CreateSellerDto, @Res() Response: Response) {
    const { name, email, password } = IncomingData

    try {
      const SellerCreation = SellerCreationFactory()

      const { Seller } = await SellerCreation.CreateSeller({
        name, email, password
      })

      delete Seller.password //* Hiding the password in API response body

      return Response.status(201).json(Seller)
    } catch (error) {
      if (error instanceof EmailExistsError) {
        Response.status(409).json({
          statusCode: Response.statusCode,
          message: 'This email already exists!',
        })
      }

      throw error
    }
  }

  @Delete(':id')
  async DeleteUser(@Param('id') sellerId: string, @Res() Response: Response) {

    try {
      await this.SellersService.DeleteUser(sellerId)

      return Response.status(200).json({
        statusCode: Response.statusCode,
        message: 'The seller has been deleted from database!'
      })
    } catch (error) {
      if (error instanceof SellerNotFoundError) {
        Response.status(404).json({
          statusCode: Response.statusCode,
          message: 'Seller not found in database!'
        })
      }

      throw error
    }

  }
}
