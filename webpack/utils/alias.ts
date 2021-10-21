import { join } from 'path'
import { rootDir } from './env'

export const alias = {
    src: join(rootDir, 'src'),
    app: join(rootDir, 'src/app'),
    controllers: join(rootDir, 'src/app/controllers'),
    middlewares: join(rootDir, 'src/app/middlewares'),
    router: join(rootDir, 'src/app/router'),
    assets: join(rootDir, 'src/assets'),
    utils: join(rootDir, 'src/utils'),
    webpack: join(rootDir, 'webpack'),
    config: join(rootDir, 'config')
}
