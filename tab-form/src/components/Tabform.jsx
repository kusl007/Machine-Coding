import React from 'react'
import { useState } from 'react'
import Settings from './Settings'
import Profile from './Profile'
import Interest from './Interest'

const Tabform = () => {
    const [activeTab,setActiveTab]=useState(0 )
    const[errors,setErrors]=useState({
       
    })
    const [data,setData]=useState(
        {
            name:"kushal",
            age:29,
            email:"kusl@gmail.com",
            interest:["coding","playing","music"],
            theme:"dark"

        }
    )
    const tabs=[
        {
         name:"Profile",
         Component:Profile,
         validate:()=>{
            const err={};
            if(!data.name || data.name.length<2){
                err.name="Name invalid"
            }
            if(!data.age || data.age<18){
                err.age="age invalid"
            }
            if(!data.email || data.email.length<2){
                err.email="Email invalid"
            }
            setErrors(err)
            // return err.name||err.age||err.email?false:true;
            return Object.keys(err).length===0;
         }
        },
        {
         name:"Interest",
         Component:Interest,
         validate:()=>{
            const err={};
            if(data.interest.length<1 ){
                err.interest="select at least 1 interest"
            }
           
            setErrors(err)
            return err.interest?false:true;
         }
        },
        {
         name:"Settings",
         Component:Settings
        },

    ]
    const CurrentTab= tabs[activeTab].Component 
    const handlesubmit=()=>{
        console.log("the data before subnmission",data)
    }
    const handleprev=()=>{
        if (!tabs[activeTab].validate || tabs[activeTab].validate()){
        
            setActiveTab(prev=>(prev-1))
        }
    }
    const handlenext=()=>{
        if (!tabs[activeTab].validate || tabs[activeTab].validate()){
       
            setActiveTab(prev=>(prev+1))
        
    }
    }
    
  return (
    <div>

    <div className='heading-container'>
        {tabs.map((tab,index)=>(<div className='heading' onClick={()=>(setActiveTab(index))}>
        {tab.name}
        </div>))}
      
    </div>

    <div className='main-content'>
        <CurrentTab data={data} setData={setData} errors={errors}/>
     
    </div>
  { activeTab>0&& <button onClick={handleprev}>prev</button>}
   {activeTab<tabs.length-1 &&<button onClick={handlenext}>next</button>}
  {activeTab==tabs.length-1 && <button onClick={handlesubmit}>submit</button>}
    </div>
  )
}

export default Tabform
