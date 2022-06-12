export default class PetStore{
    constructor(){
        this._pets = []
    }

    setPets(pets){
        this._pets = pets
    }

    get pets(){
        return this._pets
    }
}