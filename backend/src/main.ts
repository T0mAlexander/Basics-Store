import { Envs } from '@env/index'
import { AppModule } from '@nest/app.module'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

(async () => {
  const app = await NestFactory.create(AppModule)

  //? Global pipe allows data validation before dispatchment
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  )
  await app.listen(
    Envs.NEST_SERVER_PORT,
    () => console.log(`🌐 Nest.js server instanced at PORT ${Envs.NEST_SERVER_PORT}`)
  )
}) ()