import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { PrismaService } from '@nest/app.service'

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService]
})

export class UsersModule {}