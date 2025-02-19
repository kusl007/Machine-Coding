import React, { useState } from 'react'
import json from "../data.json"



const Mapping=({list})=>{
  const [isExpanded,setIsExpanded]=useState({})
  return < div className='container'>
 
  {list.map((node)=>(
  <div key={node.id}>
    {node.isFolder && <span onClick={()=>setIsExpanded((prev)=>({...prev,[node.name]:!prev[node.name],}))} className='icon'>{isExpanded?.[node.name]?"-":"+"}</span>}
    <span> {node.name}</span>
   { isExpanded?.[node.name] && node?.children && <Mapping list={node.children}></Mapping>}
    </div>
  ))}
  
  </div>
}
const App = () => {
  const [data,setData]=useState(json)
console.log(data)
  return (
    <div className='app'>
      <h1 >File/Folder Explorer</h1>
      <Mapping list={data}></Mapping>
      
    </div>
  )
}

export default App
