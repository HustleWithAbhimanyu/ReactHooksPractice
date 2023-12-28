import React ,{useState, createContext} from "react";
import Profile from "./profile";
import Contact from "./Contact";
import Home from "./Home";

import {BrowserRouter as Router , Routes , Route ,Link} from 'react-router-dom';

export const AppContext =createContext();

const MainContainer =() =>{

    const[username , setUserName]= useState("Abhimanyu");

    return(
        <AppContext.Provider value={{username , setUserName}}>
        <Router>
           
            <div>
                <Link text-color="black" to="/">Home    </Link>
                <Link to="/profile"> Profile   </Link>
                <Link to="contact">Contact </Link>
            </div>
          
           
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path ='*' element={<h1>Your Not in my Routng BABy</h1>}/>
            </Routes>
        </Router>

        </AppContext.Provider>
    )

}

export default MainContainer