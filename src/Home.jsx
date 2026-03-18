function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button onClick={addItem}>Add Item</button>
          
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
      
      <p>this is the home, just as Ace is the place with the helpful hardware store</p>
    </div>
  )
}

export default Home