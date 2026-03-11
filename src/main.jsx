import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card name ="Product 1" description="This is the first product." />
    <Card name ="Product 2" description="This is the second product." />
    <Card name ="Product 3" description="This is the third product." />
    <App />
  </StrictMode>,
)
