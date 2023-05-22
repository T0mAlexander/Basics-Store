import { Module } from '@nestjs/common'
import { PrismaService } from './app.service'
import { UsersController } from './users/users.controller'
import { UsersService } from './users/users.service'

//? Remember: without route controller and service providers, API requests won't work out

@Module({
  imports: [],
  
  //* The route controller instance to perform requests and submissions
  controllers: [UsersController],

  //* The system service to perform database queries, external API calls and data manipulation
  providers: [PrismaService, UsersService],
})

export class AppModule {}