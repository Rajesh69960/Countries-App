import React, { useContext, useEffect, useState } from "react"
import "./CountryDetails.css"
import { IoArrowBackOutline } from "react-icons/io5"
import { Link, useLocation, useParams } from "react-router-dom"
import CountryDetailsShimmer from "./CountryDetailsShimmer"
import { ThemeContext } from "./context/ThemeContext"

const CountryDetails = () => {
  const params = useParams()
  const { state } = useLocation()
  const [isDark] = useContext(ThemeContext)
  const countryName = params.country
  const [countryData, setCountryData] = useState(null)
  const [notFound, setNotFound] = useState(false)

  const updateCountryData = (data) => {
    setCountryData({
      flag: data.flags.svg,
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0].common,
      population: data.population.toLocaleString(),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital?.join(", "),
      topLevelDomain: data.tld.join(" ,"),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages || {}).join(", "),
      borders: [],
    })
    if (!data.borders) {
      data.borders = []
    }
    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      )
    })
  }
  useEffect(() => {
    if (state) {
      updateCountryData(state)
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data)
      })
      .catch((err) => {
        console.log(err)
        setNotFound(true)
      })
  }, [countryName])
  if (notFound) {
    return <div>Country Not Found</div>
  }
  return (
    <main className={`Container ${isDark ? "dark" : ""}`}>
      <div className="back-btn" onClick={() => history.back()}>
        <span className="button">
          <IoArrowBackOutline />
          &nbsp; Back
        </span>
      </div>

      {countryData === null ? (
        <CountryDetailsShimmer />
      ) : (
        <main className="main-container">
          <img
            className="country-img"
            src={countryData.flag}
            alt={countryData.name}
          />

          <div className="text-container">
            <h2 className="title-name">{countryData.name}</h2>
            <div className="text-contain">
              <p>
                <b> Native name: </b>
                {countryData.nativeName || countryData.name}
                <span className="nativeName"></span>
              </p>
              <p>
                <b> population:</b> {countryData.population}
                <span className="population"></span>
              </p>
              <p>
                <b> region: </b>
                {countryData.region}
                <span className="region"></span>
              </p>
              <p>
                <b> Sub Region: </b>
                {countryData.subRegion}
                <span className="subRegion"></span>
              </p>
              <p>
                <b> Capital: </b>
                {countryData.capital}
                <span className="capital"></span>
              </p>
              <p>
                <b> Top level Domain: </b>
                {countryData.topLevelDomain}
                <span className="topLevel"></span>
              </p>
              <p>
                <b> Currencies: </b> {countryData.currencies}
                <span className="currencies"></span>
              </p>
              <p>
                <b> Languages: </b> {countryData.languages}
                <span className="languages"></span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <p className="border-country">
                <b> Border Countries: </b> &nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </p>
            )}
          </div>
        </main>
      )}
    </main>
  )
}

export default CountryDetails
