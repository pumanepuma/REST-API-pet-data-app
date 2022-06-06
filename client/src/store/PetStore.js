export default class PetStore{
    constructor(){
        this._pets = [
            {
                name:'Pisikot',type:'cat',age:'3',id:1,
                photos:['https://cdn.shopify.com/s/files/1/1832/0821/files/catshark.jpg?v=1649869148']
            },
            {
                name:'Skoobie Doo',type:'dog',age:'7',id:2,
                photos:['https://i.pinimg.com/474x/53/fa/b6/53fab6660292f20cdaa67c5babae92ba--scooby-doo-cartoon-picture.jpg']
            },
            {
                name:'Yandex',type:'cat',age:'7',id:3,
                photos:['https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg']
            },
            {
                name:'Dina',type:'dog',age:'8',id:4,
                photos:['https://media-be.chewy.com/wp-content/uploads/2021/06/24103725/MiniatureSchnauzer-FeaturedImage.jpg']
            }
        ]
    }

    setPets(pets){
        this._pets = pets
    }

    get pets(){
        return this._pets
    }
}