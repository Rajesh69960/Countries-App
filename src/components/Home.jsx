import React, { useContext } from "react"
import { useState } from "react"
import SearchBar from "./SearchBar"
import CountriesLists from "./CountriesLists"
import { ThemeContext } from "./context/ThemeContext"

const Home = () => {
  const [query, setQuery] = useState("")
  const [isDark] = useContext(ThemeContext)
  return (
    <main className={`big-container ${isDark ? " dark" : ""}`}>
      <SearchBar setQuery={setQuery} />
      <CountriesLists query={query} />
    </main>
  )
}

export default Home
