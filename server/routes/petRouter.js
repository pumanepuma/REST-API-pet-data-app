const {Router} = require('express')
const router = new Router()

router.get('/list',(req,res) => res.json({message:'get all pets'}))
router.get('/list/:id',(req,res) => res.json({message:`get pet with id ${req.params.id}`}))
router.post('/create',(req,res) => res.json({message:'create new pet'}))

module.exports = router