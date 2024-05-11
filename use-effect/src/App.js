import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [number,setNumber] = useState(0);

  useEffect(() => {
    console.log("Numara bir artırıldı. Anlık :"+number);
  },[number]);

  return (
  <div>
    <p>{number}</p>
    <button type='button' onClick={() => setNumber(number++)}>Gönder</button>
  </div>
  );
}

export default App;
