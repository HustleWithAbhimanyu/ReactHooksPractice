import React, { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../ContextAPI/mainContainer';


const ChangeProfile = () => {

  const{setUserName} =useContext(AppContext)

const[newUsername , setNewUserName]= useState("")

  return (
    <div>
      <input onChange={
        (event)=>{setNewUserName(event.current.value)}}/>
      <button
      onClick={()=>{
        setUserName(newUsername)
       
      }}
      >Click me to Change </button>
    </div>
  )
}

export default ChangeProfile
