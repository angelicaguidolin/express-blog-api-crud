const express = require('express')
const router = express.Router()
//INDEX
router.get('/bacheca', (req, res) => {
    res.send("server del blog ")
})
//SHOW
router.get('/:id', (req, res) => {
    res.send(` dettagli sul post ${req.params.id} `)
})
//CREATE
router.post('/', (req, res) => {
    res.send('crezione post del blog ')
})
//UPDATE
router.put('/:id', (req, res) => {
    res.send(` modifica integrale sul post ${req.params.id} `)
})
//MODIFY
router.patch('/:id', (req, res) => {
    res.send(`modifica parziale sul post ${req.params.id} `)
})
//DELETE
router.delete('/:id', (req, res) => {
    res.send(`eliminazione del post ${req.params.id} `)
})

module.exports=router