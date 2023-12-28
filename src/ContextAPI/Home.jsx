import React from 'react';
import { useContext } from 'react';
import { AppContext } from './mainContainer';
// import {AppContext} from "MainConatiner";

const Home =() =>{

    const{username}=useContext(AppContext);

    return(
        <div>
            <h1>This is {username} Page</h1> 
        </div>
    )
}

export default Home