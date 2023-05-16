import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Envs } from '@env/*';

(async () => {
  const app = await NestFactory.create(AppModule)
  await app.listen(
    Envs.NEST_SERVER_PORT,
    () => console.log(`🌐 Nest.js server instanced at port ${Envs.NEST_SERVER_PORT}`)
  )
})()