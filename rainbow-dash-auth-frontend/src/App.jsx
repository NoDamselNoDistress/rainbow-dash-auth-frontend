import { useState } from 'react'
import './App.css'
import header from "./Components/Header/header.jsx";
import login from "./Components/Login/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <header darkMode={false} />
      <div id="mainContainer">
        <Routes>
          <Route path='/login' element={<login />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
