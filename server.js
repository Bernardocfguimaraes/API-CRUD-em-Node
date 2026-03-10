import { fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgrees.js'
import { z } from 'zod'

const server = fastify()

// const database = new DatabaseMemory()
const database = new DatabasePostgres()

server.post('/videos', async (request, reply) => {
    try {

        const videoBodySchema = z.object({
            title: z.string(),
            description: z.string(),
            duration: z.number().int().positive(),
        })

        const { title, description, duration } = videoBodySchema.parse(request.body)
        
        await database.create({
            title,
            description,
            duration,
        })
        
        return reply.status(201).send()

    } catch (error) {

        if (error instanceof z.ZodError) {
            return reply.status(400).send({ error: 'Dados inválidos.', details: error.errors })
        }

        console.error('Erro ao criar vídeo:', error) 
        
        return reply.status(500).send({ 
            error: 'Erro interno no servidor.' 
        })
    }
})

server.get('/videos', async (request, reply) => {
     try {
        const search = request.query.search

        const videos = await database.list(search)

        return videos

    } catch (error) {
        console.error('Erro ao buscar os vídeos.', error) 
        
        return reply.status(500).send({ 
            error: 'Erro interno no servidor.' 
        })
    }
})

server.put('/videos/:id', async (request, reply) => {
     try {

        const videoBodySchema = z.object({
            title: z.string(),
            description: z.string(),
            duration: z.number().int().positive(),
        })

        const videoId = request.params.id
        const { title, description, duration } = videoBodySchema.parse(request.body)

        await database.update(videoId, {
        title,
        description,
        duration,
    })
    
    return reply.status(204).send()

    } catch (error) {

        if (error instanceof z.ZodError) {
            return reply.status(400).send({ error: 'Dados inválidos.', details: error.errors })
        }

        console.error('Erro ao atualizar o vídeo', error) 
        
        return reply.status(500).send({ 
            error: 'Erro interno no servidor.' 
        })
    }
})

server.delete('/videos/:id', async (request, reply) => {
    try {
        const videoId = request.params.id
    
        await database.delete(videoId)

        return reply.status(204).send()

    } catch (error) {
        console.error('Erro ao deletar o vídeo.', error) 
        
        return reply.status(500).send({ 
            error: 'Erro interno no servidor.' 
        })
    }
})

server.listen({
    port: 3333,
})

