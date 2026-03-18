import { useState, useEffect } from 'react'
import { db } from './firebase'

import {
  collection,
  addDoc,
  getDocs,
  Timestamp
} from "firebase/firestore";

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

  const [text, setText] =useState('');
  const [items, setItems] =useState([]);

  const itemsCollection = collection(db, 'items');

  const getItems = async () => {
    const data = await getDocs(itemsCollection);
    setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  }

  const addItem = async () => {
    if (!text) return;
    await addDoc(itemsCollection, {
      text: text,
      createdAt: Timestamp.now()
    });
    setText('');
    getItems();
  };


  useEffect(() => {
    getItems();
  }, []);

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