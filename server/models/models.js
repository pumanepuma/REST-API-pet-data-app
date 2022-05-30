const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING}
})

const Pet = sequelize.define('pet',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    name:{type:DataTypes.STRING},
    age:{type:DataTypes.INTEGER},
    type:{type:DataTypes.STRING}
})

const Photo = sequelize.define('photo',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    img:{type:DataTypes.STRING}
})

Pet.hasMany(Photo)
Photo.belongsTo(Pet)
module.exports = {User,Pet,Photo}