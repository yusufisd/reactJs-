import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import User from './components/User';


function App(){
return (
<>
    <h2 className="text-3xl text-center pt-20">İnternet Sitesine Hoşgeldiniz</h2>
    <h4 className="text-2xl pt-20 text-center">KULLANICILAR</h4>
    <User />

     

      <div className='mt-20 bg-gray h-20'></div>

</>
)
}

export default App;
