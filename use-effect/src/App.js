import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [number,setNumber] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNumber(n=>n+1);
    },2000)
  }

  )
  return (
  <div>
    <p>{number}</p>
    <button type='button' onClick={() => setNumber(number)}>Gönder</button>
  </div>
  );
}

export default App;
