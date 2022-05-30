const {Router} = require('express')
const router = new Router()
const UserController = require('../controllers/userController')

router.post('/login',UserController.login)
router.post('/register',UserController.register)
router.get('/auth',UserController.check)

module.exports = router