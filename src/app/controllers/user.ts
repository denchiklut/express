import { Request, Response } from 'express'

interface User {
    id: string
    name: string
}
const users: Array<User> = [{ id: '0', name: 'Denis' }]

export const getUsers = (req: Request, res: Response) => {
    req.logger()
    res.json(users)
}

export const addUser = (req: Request, res: Response) => {
    const { name } = req.body

    users.push({ id: '2', name })
    res.json()
}
