import React, { useContext } from 'react';
import ChangeProfile from '../Components/ChangeProfile';
// import { useContext } from 'react';
import { AppContext } from './mainContainer';
// import {AppContext} from "./mainConatiner";


const profile = () => {

    const {username,}=useContext(AppContext);
  return (
    <div>
      <h3>This is USerProfile Page{username} </h3>
      <ChangeProfile />
    </div>
  )
}

export default profile
