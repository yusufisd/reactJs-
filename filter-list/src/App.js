import './App.css';
import Form from './Components/Form';
import Filter from './Components/Filter';
import { useState } from 'react';

const App = () => {
  const [contact,setContact] = useState([
    {
      fullname:"yusuf",
      phone:"5456112123"
    },
    {
      fullname:"ahmet",
      phone:"5461232511"
    },
    {
      fullname:"mehmet",
      phone:"5433123512"
    }
  ]);
  return (
    <div style={{ textAlign:'center', border:'solid' , padding:50 , borderRadius:50 , width:800, margin:'auto', marginTop:100}}>
      <Filter data={contact} />
      <Form addContact={setContact} contacts={contact}/>
    </div>
  );
}

export default App;
