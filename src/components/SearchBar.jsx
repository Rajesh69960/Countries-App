import React from "react"
import { IoSearch } from "react-icons/io5"

const SearchBar = ({ setQuery }) => {
  return (
    <main>
      <div className="container-filter-search">
        <div className="search-container">
          <IoSearch className="search-icon" />
          <input
            type="text"
            name="input"
            placeholder="Search for a country..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
        <select
          className="filter"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        >
          <option value="filter by name" hidden>
            filter by name
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </main>
  )
}

export default SearchBar
