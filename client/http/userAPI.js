import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const register = (email,password) => {
    const {data} = await $host.post('api/user/register', {email,password})
    localStorage.seItem('token',data)
    return jwt_decode(data)
}

export const login = (email,password) =>{
    const {data} = await $host.post('api/user/login',{email,password})
    localStorage.setItem('token',data)
    return jwt_decode(data)
}
