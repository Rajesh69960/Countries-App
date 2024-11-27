import "./App.css"

import Header from "./components/Header"

import { Outlet } from "react-router-dom"
import ThemeProvider from "./components/context/ThemeContext"

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
