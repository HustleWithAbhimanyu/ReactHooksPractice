import React from "react";
import Profile from "./profile";
import Contact from "./Contact";
import Home from "./Home";

import {BrowserRouter as Router , Routes , Route ,Link} from 'react-router-dom';



const MainContainer =() =>{

    return(
        <Router>
           
            <div>
                <Link text-color="black" to="/">Home    </Link>
                <Link to="/profile"> Profile   </Link>
                <Link to="contact">Contact </Link>
            </div>
          
           
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path ='*' element={<h1>Your Not in my Routng BABy</h1>}/>
            </Routes>
        </Router>

        
    )

}

export default MainContainer