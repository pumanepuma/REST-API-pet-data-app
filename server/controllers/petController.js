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
        const photos = await Photo.findAll({where: {
            petId: id
        }})
        const resItem = {pet, photos: photos}
        return res.json(resItem)
    }

    async createPet(req,res){
        const {name,age,type} = req.body
        let pet = {}
        if(req.files){
            const {cover} = req.files
            const fileName = uuid.v4() + '.jpg'
            cover.mv(path.resolve(__dirname,'..','static',fileName))
            pet =  await Pet.create({name,age,type,cover:fileName})
            const petPhoto = await Photo.create({img:fileName,petId:pet.id})
        }
        else pet = await Pet.create({name,age,type})
        return res.json(pet)
    }

    async deletePet(req,res){
        let {id} = req.params
        await Photo.destroy({where:{petId:id}})
        await Pet.destroy({where:{id:id}})
        return res.json({message:'ok'})
    }

    async updatePet(req,res){
        const {id} = req.params
        const {photo} = req.files
        const fileName = uuid.v4() + '.jpg'
        photo.mv(path.resolve(__dirname,'..','static',fileName))
        const petPhoto = await Photo.create({img:fileName,petId:id})
        const pet = await Pet.findOne({where:{id:id}})
        return res.json(pet)
    }
}

module.exports = new PetController()