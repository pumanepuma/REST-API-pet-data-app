import { makeAutoObservable } from "mobx"

export default class PetStore{
    constructor(){
        this._pets = []
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setPets(pets){
        this._pets = pets
    }

    setSelectedType(type){
        this._selectedType = type
    }

    get pets(){
        return this._pets
    }
}