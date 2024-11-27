import { IoMoonOutline } from "react-icons/io5"
import { FaSun } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

const Header = () => {
  const [isDark, setIsDark] = useContext(ThemeContext)
  if (isDark) {
    document.body.classList.add("dark")
  } else {
    document.body.classList.remove("dark")
  }
  return (
    <header className={` header-container ${isDark ? "dark" : ""} `}>
      <div className="content">
        <h2 className="head-title">
          <Link to="/">Where in the world?</Link>
        </h2>
        <p
          className="dark-mode"
          onClick={() => {
            setIsDark(!isDark)
            localStorage.setItem("isDarkMode", !isDark)
          }}
        >
          {isDark ? (
            <>
              <FaSun className="moon-icon" />
              &nbsp;&nbsp;
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <IoMoonOutline className="moon-icon" />
              &nbsp;&nbsp;
              <span>Dark Mode</span>
            </>
          )}
        </p>
      </div>
    </header>
  )
}

export default Header
