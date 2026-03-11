import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Card from './Card'

import React from "react";
import Message from "./message";

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
          <Nav />
        <h1>My React App</h1>

      <Message 
        text="Welcome to my React website!"
        name="Victor"
      />
      
        <Card name="Product 1" description="This is the first product." />
        <Card name="Product 2" description="This is the second product." />
        <Card name="Product 3" description="This is the third product." />
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Thank you for visiting my React website. have a good day Mr. Hare
      </p>
    </div>
  )
}

export default App