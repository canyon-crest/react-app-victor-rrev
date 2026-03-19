import { useState } from 'react';

function Home() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };


  return (
    <div>
      <h2>Home Page</h2>
      
      <p>This is the home, just as Ace is the place with the helpful hardware store. Look here for some helpful advice</p>

      <button onClick={fetchAdvice}>Get Advice</button>
      {advice && <p>Advice: {advice}</p>}
    </div>
  )
}

export default Home