// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//    console.write('Hello World')

//    return response.end()
// })

// server.listen(3333)

import { fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

server.post('/videos', () => {
    return 'Hello World'
})

server.get('/videos', () => {
    return 'Hello World'
})

server.put('/videos/:id', () => {
    return 'Hello World'
})

server.delete('/videos/:id', () => {
    return 'Hello World'
})

server.listen({
    port: 3333,
})

