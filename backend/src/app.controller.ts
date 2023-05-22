import { Controller, Get } from '@nestjs/common'

@Controller('hello')
export class AppController {
  @Get()
  Hello(): string {
    return 'Hello Nest.js'
  }
}