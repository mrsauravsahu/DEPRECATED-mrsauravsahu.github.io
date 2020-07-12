import {config} from 'dotenv'

const testEnv = process.env.NODE_ENV || 'test'

config({ path: `.env.${testEnv}` })
