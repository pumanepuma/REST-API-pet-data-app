const {Router} = require('express')
const router = new Router()

router.post('/login',(req,res) => res.json({message:'login'}))
router.post('/register',(req,res) => res.json({message:'register'}))

module.exports = router