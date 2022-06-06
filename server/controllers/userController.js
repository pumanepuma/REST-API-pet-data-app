const {User} = require('../models/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const ApiError = require('../error/ApiError')

const generateJwt = (id,email) => {
    return  jwt.sign(
        {id,email},
        process.env.SECRET,
        {expiresIn:'24h'}
    )
}

class UserController{
    async register(req,res,next){
        const {email,password} = req.body
        if(!email || !password) return next(ApiError.badRequest('Email and password are required'))
        const candidate = await User.findOne({where:{email}})
        if(candidate) return next(ApiError.badRequest('User already exists'))
        const hashed = await bcrypt.hash(password, 5)
        const user = await User.create({email,password:hashed})
        const token = generateJwt(user.id, user.email)
        return res.json(token)
    }

    async login(req,res,next){
        const {email,password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user) return next(ApiError.internal('User not found'))
        let compare = bcrypt.compareSync(password, user.password)
        if(!compare) return next(ApiError.internal('Wrong password'))
        const token = generateJwt(user.id, user.email, user.role)
        return res.json(token)
    }

    async check(req,res,next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json(token)
    }
}

module.exports = new UserController()