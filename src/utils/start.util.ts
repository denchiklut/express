import { Express } from 'express'

export const startApp = (server: Express) => {
    server.listen(8080, () => {
        console.log('server running on 8080')
    })
}
