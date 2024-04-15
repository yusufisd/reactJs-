import React from 'react';
import { useState } from 'react';

export default function InputState() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  console.log(email);
  return (
    <div style={{ padding:25, margin:25, flex:'flex', flexDirection:'row' }}>
      <form method='POST' action='#'>
        <input style={{ border:'solid', borderRadius:10, padding:10 }} type='text' onChange={(event) => setEmail(event.target.value)} placeholder='email' />
        <input style={{ border:'solid', borderRadius:10, padding:10 }} type='text' onChange={(event) => setPassword(event.target.value)} placeholder='şifre' />
        <input type='submit' style={{ backgroundColor:'lightblue', padding:10, borderRadius:10 }} value='Gönder' />
      </form>
    </div>
  )
}
