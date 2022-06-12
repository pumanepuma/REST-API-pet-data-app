import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const login = async (email,password) => {
    const {data} = await $host.post('/api/user/login',{email,password})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const register = async (email,password) => {
    const {data} = await $host.post('/api/user/register',{email,password})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const check = async () => {
    const {data} = await $authHost.get('/api/user/auth')
    console.log(data)
    localStorage.setItem('token',data)
    return jwt_decode(data)
}