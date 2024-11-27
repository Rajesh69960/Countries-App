import React from "react"
import { Link } from "react-router-dom"

const CountryCard = ({
  name,
  flagImage,
  population,
  region,
  capital,
  data,
}) => {
  return (
    <>
      <Link className="card-contain" to={`/${name}`} state={data}>
        <img className="image" src={flagImage} alt={name} />
        <div className="card-text">
          <h3>{name}</h3>
          <p>
            <b>population: </b>
            {population.toLocaleString()}
          </p>
          <p>
            <b>Region: </b> {region}
          </p>
          <p>
            <b>Capital: </b> {capital}
          </p>
        </div>
      </Link>
    </>
  )
}

export default CountryCard
