const {Router} = require('express')
const router = new Router()
const PetController = require('../controllers/petController')
const authMidddleware = require('../middleware/authMiddleware')

router.get('/',PetController.getAll)
router.post('/',authMidddleware,PetController.createPet)
router.get('/:id',PetController.getOne)
router.delete('/:id',authMidddleware,PetController.deletePet)
router.put('/:id',authMidddleware,PetController.updatePet)

module.exports = router