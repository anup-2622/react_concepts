
import './App.css';
import { Parent } from './components/child_parent_comp.jsx/Parent';
import Inlinecss from './udmey/Inlinecss';
import name, {profession, degrees} from "./udmey/ImportExport";
import Propsconcept from './udmey/Propsconcept';
import Emoji from './udmey/emoji/Emoji';
import Login from './Login/Login';
import React, { useState } from 'react';
import Desructure from './udmey/Desructure';


const isAuthenticated = false;

function App() {

  
//   const now = new Date().toLocaleTimeString()
//   const [mytime , setTime] = useState(now)
//   function gettime(){
//       setTime(new Date().toLocaleTimeString());
  
//  }
//  setInterval(gettime , 1000)
//  console.log(time);
  return (
  // <Parent/>
  <div className='flex items-center justify-center w-screen h-screen bg-blue-200 '>
  
  {/* <Login isRegistered={isAuthenticated} /> */}
  {/* <Inlinecss/>
  <div className="border">hello {name} {profession} </div>
  <Propsconcept/>
  <Emoji/> */}
   {/* <p>{mytime}</p> */}
   {/* <button onClick={gettime()}>get time</button> */}
   <Desructure/>
  </div>

  );
}

export default App;
