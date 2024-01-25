import './App.css';
import React, { useState } from 'react';

function App() {
      const [elementsList, setElementsList] = useState([
      { type: 'fruta', name: 'Fresa' },
      { type: 'ciudad', name: 'Armenia' },
      {  type: 'fruta', name: 'Mango' },
      { type: 'ciudad', name: 'Bogota' },
      {  type: 'fruta', name: 'Ciruela' },
      { type: 'ciudad', name: 'San Andres' },
      {  type: 'fruta', name: 'Papaya' },
      { type: 'fruta', name: 'Melon' },
      { type: 'ciudad', name: 'Caldas' },
      {  type: 'fruta', name: 'Durazno' },
      { type: 'ciudad', name: 'Amazonas' },
      {  type: 'fruta', name: 'Limon' },
      { type: 'ciudad', name: 'Medellin' },
      {  type: 'fruta', name: 'Cereza' },
    ]);
  const [filter,setFilter]=useState('');

  const filterChange=(event)=>{
    setFilter(event.target.value)
  }

  const filteredlist=filter?elementsList.filter(item=>item.type===filter):elementsList

  return (

<div className=' flex flex-col  bg-slate-200/50 h-screen'> 
      <span className='text-xs m-3'>Porfavor escoga entre 'fruta' o 'ciudad' para filtrar la lista:</span>
      <input className= ' w-1/4 mx-3 my-2 rounded-sm text-sm  border border-b-slate-600 ' type="text" value={filter} onChange={filterChange} placeholder="Filtrar por nombre" />
      <ul className=' list-disc list-inside text-sm space-y-1 mx-6 font-normal'> 
        {filteredlist.map(item => (
          <li key={item.tipo}>{item.name}</li>
        ))}
      </ul>
</div>

  );
}


export default App;
