import React from "react";
import {useState} from 'react';

function StateHook(){
    
    const[counter , setCounter]= useState(0);
    const[ text, settext]=useState("Even");

    let increment=()=>{
        
     setCounter(counter +1);
     settext(counter % 2 == 0?'ODD':'EVEN');
     
    }

    let decrement=() => {
            setCounter(counter - 1);
            settext(counter % 2 == 0?'ODD':'EVEN');
    }
   
return(
    <>
    
    <h2>Counter: {counter}</h2>
      <p>Type:   
        {text}</p>
    <div id='a'>
    <button  onClick={increment} >Increment</button>
    <button onClick={decrement}>Decrement</button>
    {/* <h1>{text}</h1> */}
    
    </div>
    
    </>
)

}

export  default StateHook

