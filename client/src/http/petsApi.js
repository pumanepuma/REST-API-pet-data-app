import { $host, $authHost } from './index'

export const getPets = async() => {
    const {data} = await $host.get('/api/pets')
    return data
}

export const getFilteredPets = async(filter) => {
    const {data} = await $host.get('/api/pets?type=' + filter)
    return data
}

export const createPet = async(pet) => {
    const {data} = await $authHost.post('/api/pets',pet)
    return data
}

export const getOnePet = async(id) => {
    const {data} = await $host.get('/api/pets/' + id)
    return data
}

export const deletePet = async(id) => {
    await $authHost.delete('/api/pets/' + id)
    return {message:'ok'}
}

export const updatePet = async(id,photo) => {
    const {data} = await $authHost.put('/api/pets/' + id, photo)
    return data
}