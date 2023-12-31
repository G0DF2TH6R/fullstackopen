import axios from 'axios'
const baseUrl = 'api/persons'

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = newPerson => axios.post(baseUrl, newPerson)

const remove = id => axios.delete(`${baseUrl}/${id}`)

const update = (id, newPerson) => axios.put(`${baseUrl}/${id}`, newPerson)

export default {
    getAll,
    create,
    remove,
    update
}