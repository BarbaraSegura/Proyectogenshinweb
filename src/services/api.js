import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:3000/api'
})

async function getCharacters() {
    try {
        const { data } = await API.get('/character')
        return data
    } catch (error) {
        return { error: error.message }
    }
}

async function getWeapons() {
    try {
        const { data } = await API.get('/weapon')
        return data
    } catch (error) {
        return { error: error.message }
    }
}

export default {
    getCharacters,
    getWeapons
}