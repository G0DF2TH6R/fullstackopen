import countriesService from "../services/countriesService"
import Country from "./Country"

const SuitableCountries = ( {handleTemperature, temperature, showCountry, countries} ) => {

    if (countries == undefined) {
        return null
    }

    if (countries.length === 1) {
        handleTemperature(countries[0])

        return (
        <Country temperature={temperature} country={countries[0]} />
        )
    }

    if (countries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    return (
        <div>
            {countries.map(country => <p>{country.name.common} <button onClick={() => showCountry(country)} >Show</button></p>
            )}
        </div>
    )

}

export default SuitableCountries