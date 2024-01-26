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

<div className=' flex flex-col bg-slate-200/50 h-screen'> 
<h1 className='text-md font-bold text-center m-6'>Aplicacion para filtrar segun dos criterios:</h1>
      <span className='text-sm m-3'>Porfavor escoga entre 'fruta' o 'ciudad' para filtrar la lista:</span>
      <select className='text-sm w-auto max-w-min rounded-md ml-6 mb-4' value={filter} onChange={filterChange}>
        <option value="">Selecciona...</option>
        <option value="fruta">Fruta</option>
        <option value="ciudad">Ciudad</option>
      </select>
      <ul className='  list-inside text-sm space-y-1 mx-6 font-normal'> 
        {filteredlist.map((item,index) => (
          <li className={index % 2 === 0 ? 'bg-blue-500/50 p-2 font-normal' : 'bg-blue-300/50 p-2 font-bold'} key={item.tipo}>{item.name}</li>
        ))}
      </ul>
</div>

  );
}


export default App;
