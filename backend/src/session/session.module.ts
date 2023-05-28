import { Module } from '@nestjs/common'
import { SessionService } from './session.service'
import { SessionController } from './session.controller'
import { PrismaService } from '@nest/app.service'

@Module({
  controllers: [SessionController],
  providers: [PrismaService, SessionService]
})
export class SessionModule {}
