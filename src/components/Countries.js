import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import styles from './Countries.module.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("");
    const [continent, setContinent] = useState("");
    const [countriesOrg, setCountriesOrg] = useState([])

    useEffect(() => {
        console.log(continent);
        let timeout = setTimeout(() => {
            getCountries()
        }, 1000)

        return () => clearTimeout(timeout);
    }, [query, continent])

    const getCountries = async () => {

        const url = query ? `https://restcountries.com/v3.1/name/${query}` : "https://restcountries.com/v3.1/all"
        try {
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                setCountriesOrg(data)
                if (continent) {
                    setCountries(data.filter((kraj) => kraj.continents[0] === continent))
                } else {
                    setCountries(data)
                }
            } else {
                setError("nie udało sie")
            }
        } catch (err) {
            console.log("nie udało sie");
        }
    }
    return (
        <div>
            {error ? <p>{error}</p> : null}
            <Header query={query} setQuery={setQuery} countries={countriesOrg} continent={continent} setContinent={setContinent} />
            <div className={styles.main}>
                {countries.map((country) => <div key={country.cca3} className={styles.countries}> <Link to="/country" state={{ data: country }}><img src={country.flags.png} alt='flaga' /></Link> </div>)}
            </div>
        </div>
    )
}

export default Countries