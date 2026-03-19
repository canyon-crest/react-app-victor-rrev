import { useState, useEffect } from 'react'
import { db } from './firebase'
import { serverTimestamp } from "firebase/firestore";

import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  deleteDoc,
  doc
} from "firebase/firestore";

import './App.css'
import About from './About'
import Nav from './nav'
import Card from './card'
import Home from './Home'
import Products from './Products'
import Contact from './About'
import Footer from './Footer'

/*import Message from "./message";*/

import GoogleLogin from './GoogleLogin';

function App() {

  /*auth state*/
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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
          
          <Nav setPage={setPage} user={user}/>

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
                Submit Feedback
              </button>

            </>
          )}
          {page === 'Products' && <Products />}
          {page === 'About' && <About />}
          {page === 'GoogleLogin' && <GoogleLogin />}

          

          <h1 className="logo-title">Reverdatto's Marketplace</h1>

          {/*<Message 
            text="Welcome to Reverdatto's Marketplace!"
            name="Mr. Hare"
          />*/}
            
     {/*<Footer />*/}    
      
    </div>
  )
}

export default App