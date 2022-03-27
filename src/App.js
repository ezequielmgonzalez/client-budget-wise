import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import List from "./pages/List"

function App () {
  const App = () => (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  )
  return (
      <App />
  )
}


export default App