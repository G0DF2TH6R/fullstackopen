import { useEffect, useState } from "react";
import countriesService from "./services/countriesService";
import SuitableCountries from "./components/SuitableCountries";

function App() {
  const [countries, setCountries] = useState([])
  const [suitableCountries, setSuitableCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [temperature, setTemperature] = useState('')
  const [temperatureIcon, setTemperatureIcon] = useState('')

  const handleTemperature = (country) => {
    countriesService
    .getCapitalWeather(country.capital)
    .then(response => {
      setTemperatureIcon(response.weather[0].icon)


      setTemperature(response.main.temp)
    })

  }

  const handleFilterChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
  
    setSuitableCountries(countries.filter(country => country.name.common.toLowerCase().includes(newFilter)))

  }

  const showCountry = (country) => {
    setSuitableCountries([country])
  }

  useEffect(() => {
    countriesService
    .getAll()
    .then(response => setCountries(response))
  }, [])

  return (
    <div>
      <p>find countries</p>
      <input onChange={handleFilterChange} value={filter} />
      <SuitableCountries temperatureIcon={temperatureIcon} handleTemperature={handleTemperature} temperature={temperature} showCountry={showCountry} countries={suitableCountries} />
    </div>
  );
}

export default App;
