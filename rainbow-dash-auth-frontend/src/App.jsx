import { useState } from 'react'
import './App.css'
import header from "./Components/Header/header.jsx";
import Login from "./Components/Login/login.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <header darkMode={false} />
      <div id="mainContainer">
        <Routes>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
