import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";

const name = "yusuf damar";
const age = 21;

function App(){
  return (
    <>
    <Header />
    { age >= 18 ? 
    (
      {name}
    ) : (
      't3st2'
    )}
    </>
  )
}

export default App;
