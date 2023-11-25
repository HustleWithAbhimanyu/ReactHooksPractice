import React from "react";
import {useState} from 'react';

function StateHook(){
    
    const[counter , setCounter]= useState(0);

    let increment=()=>{
        
     setCounter(counter +1);
    }

    let decrement=() => {
            setCounter(counter - 1);
    }
return(
    <>
    <h1>StateHook</h1>
    {counter }
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
)

}

export  default StateHook