const {Router} = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const petRouter = require('./petRouter')

router.use('/api/user',userRouter)
router.use('/api/pets',petRouter)

module.exports = router

