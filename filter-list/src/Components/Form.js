import { React , useState } from 'react'

export default function Form({contacts, addContact}) {

    const initialValues = {fullname:"", phone:""};
    const [form,setForm] = useState(initialValues);


    const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullname === '' || form.phone === '')
        {
            return false;
        }
        addContact([...contacts, form])
    }
  return (
    <form onSubmit={onSubmit} style={{ textAlign:'center', border:'solid' , padding:50 , borderRadius:50 , width:450, margin:'auto', marginTop:100}}>
        <div style={{ marginBottom:20 }}>
            <input type='text' value={form.fullname} onChange={(e) => onChangeInput(e)} name='fullname' placeholder='Ad soyad' />
        </div>
        <div style={{  marginBottom:20  }}>
            <input type='text'  value={form.phone} onChange={(e) => onChangeInput(e)} name='phone' placeholder='Telefon' />
        </div>
        <div style={{  }}>
            <input type='submit' placeholder='Telefon' />
        </div>
    </form>
  )
}
