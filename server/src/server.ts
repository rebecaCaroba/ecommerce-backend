import express from 'express'

const server = express()

server.get('/', (_,res) => {

    return res.send('Hello world BERECADAS')
})

server.listen(3333, () => console.log('Rodando...'))