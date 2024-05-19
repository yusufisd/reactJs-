import {React, useState} from 'react'

const Filter = ({data}) => {
    const [search,setSearch] = useState('');
    const filter = data.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(search.toLocaleLowerCase())
        );
    });
  return (
    <>
        <div style={{ textAlign:'center', border:'solid' , padding:50 , borderRadius:50 , width:450, margin:'auto', marginTop:100}}>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}  placeholder='Ara...' style={{ paddingInline:20, paddingBlock:10, borderRadius:10 }}/>
        { filter.map((item) => (
            <p>{item.fullname}</p>
        )) }
        </div>
    </>
  )
}
export default Filter;
