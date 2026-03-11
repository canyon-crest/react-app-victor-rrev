import { useState } from 'react'
import './App.css'
import Nav from './nav'
import Card from './card'
import Home from './Home'
import About from './About'
import Contact from './Contact'

import Message from "./message";

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('home')

  return (
    
      <div>
          
          <Nav setPage={setPage} />

          {page === 'home' && <Home />}
          {page === 'about' && <About />}
          {page === 'contact' && <Contact />}

          <h1>My React App</h1>

          <Message 
            text="Welcome to my React website!"
            name="Mr. Hare"
          />
      
          <Card name="Life Insurance" description="Insurance for your Life" />
          <Card name="Home/Boat/Auto Insurance" description="Insurance for your valuables" />
          <Card name="Geico" description="Geico" />
          <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        <p>
          click me
        </p>
      </div>
      <p className="read-the-docs">
        Thank you for visiting my React website. have a good day Mr. Hare
      </p>
    </div>
  )
}

export default App