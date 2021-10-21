import { Router } from 'express'

import { getUsers, addUser } from 'controllers/user'

export const userRoutes = (router: Router) => {
    router.get('/users', getUsers)
    router.post('/users', addUser)
}
