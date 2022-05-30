const {Pet} = require('../models/models')

class PetController{
    async getAll(req,res){
        const pets = await Pet.findAll()
        return res.json(pets)
    }

    async getOne(req,res){
        let {id} = req.params
        const pet = await Pet.findAll({where: {
            id:id
        }})
        return res.json(pet)
    }

    async createPet(req,res){
        let {name,age,type,photos} = req.body
        const pet = await Pet.create({name,age,type})
        console.log(name)
        return res.json(pet)
    }
}

module.exports = new PetController()