import React from 'react'

const Interest = ({data,setData,errors}) => {
    const {interest}=data;
    const handleDataChange=(e)=>{
        
        const name=e.target.name
        setData((prev)=>({...prev, interest: e.target.checked?[...prev.interest,e.target.name]:prev.interest.filter(i=>i!=name)}))
        console.log("data is ",data)
    }
  return (
    <div>
     <div>
        <label>
            <input type="checkbox"  name="coding" checked={interest.includes("coding")} onChange={handleDataChange} />
            coding
        </label>
     </div>
     <div>
        <label>
            <input type="checkbox"  name="reading" checked={interest.includes("reading")}  onChange={handleDataChange}/>
            reading
        </label>
     </div>
     <div>
        <label>
            <input type="checkbox"  name="cooking" checked={interest.includes("cooking")} onChange={handleDataChange} />
            cooking
        </label>
     </div>
     <div>
        <label>
            <input type="checkbox"  name="playing" checked={interest.includes("playing")}  onChange={handleDataChange}/>
            playing
        </label>
     </div>
     <div>
        <label>
            <input type="checkbox"  name="music" checked={interest.includes("music")} onChange={handleDataChange} />
            music
        </label>
     </div>
     {errors.interest&& <span className='error'>{errors.interest}</span>}
    </div>
  )
}

export default Interest
