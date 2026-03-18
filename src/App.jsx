import { useState, useEffect } from 'react'
import { db } from './firebase'
import { serverTimestamp } from "firebase/firestore";

import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  deleteDoc,
  doc
} from "firebase/firestore";

import './App.css'
import Nav from './nav'
import Card from './card'
import Home from './Home'
import About from './About'
import Contact from './Contact'

import Message from "./message";

function App() {

  {/*buttons*/}
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('home')

  {/*firestore*/}
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
      createdAt: serverTimestamp()
    });
    setText('');
    getItems();
  };


  useEffect(() => {
    getItems();
  }, []);

  {/*delete items button*/}
  const clearItems = async () => {
    const data = await getDocs(itemsCollection);
    
    const deletePromises = data.docs.map((item) =>
      deleteDoc(doc(db, 'items', item.id))
    );

    await Promise.all(deletePromises);

    setItems([]);
  };

  return (
    
      <div>
          
          <Nav setPage={setPage} />

          {page === 'home' && (
            <>
              <Home />
              
              {/* firestore stuff */}
              <h2>Customer Feedback</h2>
              <p>please be truthful in your feedback. it helps us a lot</p>
              
              <div className="input-group">
                <input value={text}onChange={(e) => setText(e.target.value)} />

                <button onClick={addItem}>Add Item</button>
              </div>

              <ul>
               {items.map((item) => (
                 <li key={item.id}>{item.text}</li>
                ))}
              </ul>

              <button onClick={clearItems} style={{ marginTop: "10px", backgroundColor: "#e74c3c" }}>
                Clear all Items
              </button>

            </>
          )}
          {page === 'about' && <About />}
          {page === 'contact' && <Contact />}

          

          <h1>My React App</h1>

          <Message 
            text="Welcome to my React website!"
            name="Mr. Hare"
          />
          <div className="card-container">
            <Card name="Life Insurance" description="Insurance for your Life" />
            <Card name="Home/Boat/Auto Insurance" description="Insurance for your valuables" />
            <Card name="Geico" description="Geico" />
          </div>
          <div className="card counter'box">
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