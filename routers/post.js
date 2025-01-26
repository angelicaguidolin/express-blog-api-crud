const express = require('express')
const router = express.Router()
const controllerPost= require("../controllers/controllers")

//INDEX
router.get('/bacheca', controllerPost.index)
//SHOW
router.get('/:id', controllerPost.show)
//CREATE
router.post('/', controllerPost.store)
//UPDATE
router.put('/:id',controllerPost.update)
//MODIFY
router.patch('/:id', (req, res) => {
    res.send(`modifica parziale sul post ${req.params.id} `)
})
//DELETE
router.delete('/:id', controllerPost.destroy)

module.exports=router