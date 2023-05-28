import { Module } from '@nestjs/common'
import { SellersModule } from './sellers/sellers.module'
import { UsersModule } from './users/users.module'
import { AppController } from '@nest/app.controller'
import { SessionModule } from './session/session.module'

//? Remember: without route controller and service providers, API requests won't work out

@Module({
  //* The API services coming from another part of the system
  imports: [SellersModule, UsersModule, SessionModule],
  
  //* The route controller instance to perform requests and submissions
  controllers: [AppController],

  //* The system service to perform database queries, external API calls and data manipulation
  providers: [],
})

export class AppModule {}