import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'
import { appRoutes } from './routes'


const app = Fastify()


app.register(cors, {
    // origin: ['http://localhost:3333'] dessa forma apenas o endereço especificado teria acesso ao banco de dados
})
app.register(appRoutes)


app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server running')
})