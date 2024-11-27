import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import CountriesListsShimmer from "./CountriesListsShimmer"

const CountriesLists = ({ query }) => {
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })
  }, [])
  return (
    <>
      {!countriesData.length ? (
        <CountriesListsShimmer />
      ) : (
        <div className={`card-container `}>
          {countriesData
            .filter(
              (country) =>
                country.name.common.toLowerCase().includes(query) ||
                country.region.toLowerCase().includes(query)
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flagImage={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital?.[0]}
                  data={country}
                />
              )
            })}
        </div>
      )}
    </>
  )
}

export default CountriesLists
