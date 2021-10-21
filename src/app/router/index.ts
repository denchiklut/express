import { Router } from 'express'

import { staticRoutes } from 'router/static.route'
import { userRoutes } from 'router/user.route'

export const router = Router()
staticRoutes(router)
userRoutes(router)
