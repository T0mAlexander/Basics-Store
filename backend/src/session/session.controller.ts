/* eslint-disable @typescript-eslint/no-unused-vars */
import { Envs } from '@env/index'
import { InvalidCredentialsError } from '@errors/InvalidCredentials.error'
import { SellerAuthFactory } from '@factory/seller/auth.factory'
import { UserAuthFactory } from '@factory/user/auth.factory'
import { Controller, Post, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import * as JWT from 'jsonwebtoken'

@Controller('auth')
export class SessionController {

  @Post('user')
  async AuthUser(@Req() Request: Request, @Res() Response: Response) {
    const { email, password } = Request.body // Capturing the incoming user data in API request body

    try {
      const UserAuth = UserAuthFactory()

      const { User } = await UserAuth.AuthUser({
        email, password
      })

      const token = JWT.sign({ UserID: User.id }, Envs.JWT_TOKEN)

      const refreshToken = JWT.sign({ UserID: User.id }, Envs.JWT_TOKEN, { expiresIn: '12h' })

      return Response.cookie('RefreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
        .status(200)
        .send({ token })
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        return Response.status(401).send({
          message: error.message
        })
      }

      throw error
    }
  }

  @Post('seller')
  async AuthSeller(@Req() Request: Request, @Res() Response: Response) {
    const { email, password } = Request.body // Capturing the incoming user data in API request body

    try {
      const SellerAuth = SellerAuthFactory()

      const { Seller } = await SellerAuth.AuthSeller({
        email, password
      })

      const token = JWT.sign({ SellerID: Seller.seller_id }, Envs.JWT_TOKEN)

      const refreshToken = JWT.sign({ SellerID: Seller.seller_id }, Envs.JWT_TOKEN, { expiresIn: '12h' })

      return Response.cookie('RefreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
        .status(200)
        .send({ token })
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        return Response.status(401).send({
          message: error.message
        })
      }

      throw error
    }
  }

}
