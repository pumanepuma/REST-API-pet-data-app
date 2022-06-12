import { $host, $authHost } from './index'

export const getPets = async() => {
    const {data} = await $host.get('/api/pets')
    return data
}