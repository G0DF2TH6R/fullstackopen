import axios from 'axios'
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"

const getAll = () => axios.get(`${baseUrl}/all`).then(response => response.data)

const getByName = (name) => axios.get(`${baseUrl}/name/${name}`).then(response => response.data)

const getCapitalWeather = (name) => {
    const api_key = process.env.REACT_APP_API_KEY
    
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=metric`)
    .then(response => response.data)
}


export default {
    getAll,
    getByName,
    getCapitalWeather
}