import React from 'react'

const Settings = ({data,setData,errors}) => {
    const {theme}=data
    const handleDataChange=(e)=>{
        
        const name=e.target.name
        setData((prev)=>({...prev, theme:name}))
        console.log("data is ",data)
    }
  return (
    <div>
      <div>
        <label>
            <input type="radio"  name="dark" checked={theme=="dark"}  onChange={handleDataChange}/>
            Dark-Theme
        </label>
     </div>
      <div>
        <label>
            <input type="radio"  name="light" checked={theme=="light"}  onChange={handleDataChange}/>
            Light-Theme
        </label>
     </div>
    </div>
  )
}

export default Settings
