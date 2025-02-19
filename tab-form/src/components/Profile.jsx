import React from 'react'

const Profile = ({data,setData,errors}) => {
    const {name,email,age}=data
    const handleChange=(e)=>{
        // console.log("Updating:", e.target.name, "New Value:", e.target.value)
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        console.log(data)
    }
  return (
    <div>
        <div>
            <label >
                Name:
            </label>
            <input type="text" name="name" value={name} onChange={(e)=>handleChange(e)}></input>
            
        </div>
        {errors.name&& <span className='error'>{errors.name}</span>}
        <div>
            <label >
                Email:
            </label>
            <input type="email" name="email" value={email} onChange={(e)=>handleChange(e)} ></input>
        </div>
        {errors.email&& <span className='error'>{errors.email}</span>}
        <div>
            <label >
                Age:
            </label>
            <input type="number"  name="age" value={age} onChange={(e)=>handleChange(e)}></input>
        </div>
        {errors.age&& <span className='error'>{errors.age}</span>}
    </div>
  )
}

export default Profile
