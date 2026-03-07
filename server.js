// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//    console.write('Hello World')

//    return response.end()
// })

// server.listen(3333)

import { fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title: title,
        description: description,
        duration: duration,
    })
    return reply.status(201).send()
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

