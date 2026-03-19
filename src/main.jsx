import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './Footer.jsx'
import App from './App.jsx'
import Card from './card.jsx'
import Nav from './nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />     
  </StrictMode>,
)