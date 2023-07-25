

const Country = ( {temperature, country} ) => {



    return (
        <div>
            <h1>{country.name.common}</h1>
            <br/>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <ul>{Object.values(country.languages).map(language => <li>{language}</li>)}</ul>
            <img src={country.flags["png"]} />
            <p>Weather in {country.capital}: {temperature} C°</p>


        </div>
    )

}

export default Country