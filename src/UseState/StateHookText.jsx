import React from "react";
import { useState} from "react";


function StateHookText(){
const[text, setText]=useState("Abhimanyu")

let modifiedText=(event) => {
   let newValue= event.target.value
    setText(newValue);
}

    return(
        <>
        <h1>Input For State Hook</h1>
        <input onChange={modifiedText} placeholder="Write Something" />
        {text}
        
        </>
    )
}

export default StateHookText