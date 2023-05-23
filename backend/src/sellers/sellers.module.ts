import { Module } from '@nestjs/common'
import { SellersService } from './sellers.service'
import { SellersController } from './sellers.controller'
import { PrismaService } from '../app.service'

@Module({
  controllers: [SellersController],
  providers: [PrismaService, SellersService]
})

export class SellersModule {}