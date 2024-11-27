import React from "react"

import "./CountryDetailsShimmer.css"

export default function CountryDetailsShimmer() {
  return (
    <div className="main-container shimmer">
      <div className="country-img"></div>
      <div className="text-container">
        <h1 className="title-name"></h1>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}
