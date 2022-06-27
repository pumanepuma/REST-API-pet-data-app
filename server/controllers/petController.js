const {Pet,Photo} = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class PetController{
    async getAll(req,res){
        let {type} = req.query
        let pets = {}
        try{
            if(!type){
                pets = await Pet.findAll()
            }
            else{
                pets = await Pet.findAll({where:{type}})
            }
            
            return res.json(pets)
        }
        catch(e){
            return res.json(e.message)
        }
    }

    async getOne(req,res){
        let {id} = req.params
        try{
            const pet = await Pet.findAll({where: {
                id:id
            }})
            const photos = await Photo.findAll({where: {
                petId: id
            }})
            const resItem = {pet: pet, photos: photos}
            console.log(photos)
            console.log(pet)
            return res.json(resItem)
        }
        catch(e){
            return res.json(e.message)
        }
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
        try{
            await Photo.destroy({where:{petId:id}})
            await Pet.destroy({where:{id:id}})
        }
        catch(e){
            return res.json(e.message)
        }
        return res.status(200)
    }

    async updatePet(req,res){
        const {id} = req.params
        if(req.files){
            const {photo} = req.files
            const fileName = uuid.v4() + '.jpg'
            photo.mv(path.resolve(__dirname,'..','static',fileName))
            const petPhoto = await Photo.create({img:fileName,petId:id})
            return res.json(petPhoto)
        }
        const pet = await Pet.findOne({where:{id:id}})
        return res.json(pet)
    }
}

module.exports = new PetController()