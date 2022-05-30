const {Router} = require('express')
const router = new Router()
const PetController = require('../controllers/petController')

router.get('/',PetController.getAll)
router.post('/',PetController.createPet)
router.get('/:id',PetController.getOne)

module.exports = router