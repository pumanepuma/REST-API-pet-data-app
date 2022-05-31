const {Pet,Photo} = require('../models/models')
const uuid = require('uuid')
const path = require('path')

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
        let {name,age,type} = req.body
        const pet = await Pet.create({name,age,type})
        if(req.files){
            const {photo} = req.files
            const fileName = uuid.v4() + '.jpg'
            photo.mv(path.resolve(__dirname,'..','static',fileName))
            const petPhoto = await Photo.create({img:fileName,petId:pet.id})
            return res.json(petPhoto)
        }
        return res.json(pet)
    }

    async deletePet(req,res){
        let {id} = req.params
        await Photo.destroy({where:{petId:id}})
        await Pet.destroy({where:{id:id}})
        return res.json({message:'ok'})
    }
}

module.exports = new PetController()