import 'dotenv/config'
import { z as Zod } from 'zod'

const EnvironmentSchema = Zod.object({
  NODE_ENV: Zod.enum(['dev', 'production']).default('dev'),
  NEST_SERVER_PORT: Zod.coerce.number().default(3333)
})

const _Environment = EnvironmentSchema.safeParse(process.env)

if (_Environment.success === false) {
  console.error('🚨 Invalid env variable. Please, review the code', _Environment.error.format())

  throw new Error('🚨 Invalid env variable. Please, review the code')
}

export const Envs = _Environment.data