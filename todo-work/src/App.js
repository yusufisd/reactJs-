import {React, useState, Link} from 'react'

export default function App() {
  const [datas, setData] = useState([
    {title:"test", status:0},
    {title:"test2", status:0},
    {title:"test3", status:0},
  ]);
  const [form, setForm] = useState({title:"", status:""});
  const [acceptFilter, setAcceptFilter] = useState({title:"", status:""});
  const [rejectFilter, setRejectFilter] = useState({title:"", status:""});
  const onChangeInput = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(form.title === '' )
      {
          return false;
      }
      setData([...datas, form]);
      setForm({title:"", status:""});
  }
  const changeStatus = (title) => {
    const updatedData = datas.map((data) => {
      if (data.title === title) {
        return { ...data, status: data.status === 0 ? 1 : 0 };
      }
      return data;
    });
    setData(updatedData);
  };
  const [dataType, setDataType] = useState('all');

  return (
    <div style={{ margin:'auto',  border:'solid', width:600, marginTop:100 ,padding:10 }}>
      <h1 style={{ textAlign:'center' }}>To-do List</h1>
      <form
        onSubmit={onSubmit}
      >
        <input type="text" value={form.title} name='title' onChange={(e) => onChangeInput(e)} style={{ width:563, padding:15, marginBottom:15 }} placeholder='Ekle'/>
      </form>


      {/* TÜM DATALAR */}
      {
        datas.map((item, key) => (
          <div style={{ flex:1, flexDirection:'column', padding:10}}>
            <div onChange={() => changeStatus(item.title)}>
              <input type='checkbox' id={key}/>
              <label style={{ fontSize:20, fontWeight:100, marginLeft:12 }} for={key}>{item.title}</label>
            </div>
            <hr />
          </div>
        ))
      }

      {/* YAPILACAKLAR */}




      {/* TAMAMLANANLAR */}



      <div style={{ display:'flex', justifyContent:'space-between' , padding:5 }}>
        <p style={{ fontWeight:200, padding:5 }}>Kalan: {datas.length}</p>
        <div style={{ display:'flex', gap:25 }}>
          <p style={{ fontWeight:200, border:'solid', padding:5 }}>Hepsi</p>
          <p style={{ fontWeight:200 , padding:5}}>Yapılacaklar</p>
          <p style={{ fontWeight:200 , padding:5 }}>Tamamlanmış</p>
        </div>
        <p style={{ fontWeight:200, padding:5 }}>Hepsi</p>
      </div>
    </div>
  )
}

