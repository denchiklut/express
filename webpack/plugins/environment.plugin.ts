import dotenv from 'dotenv'
import { EnvironmentPlugin } from 'webpack'

dotenv.config()
const config = {
    DEBUG: process.env.DEBUG
}

export const environmentPlugin = new EnvironmentPlugin(config)
