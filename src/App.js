
import './App.css';
import { Parent } from './components/child_parent_comp.jsx/Parent';
import Inlinecss from './udmey/Inlinecss';
import name, {profession, degrees} from "./udmey/ImportExport";
import Propsconcept from './udmey/Propsconcept';
import Emoji from './udmey/emoji/Emoji';
import Login from './Login/Login';
import React, { useState } from 'react';
import Desructure from './udmey/Desructure';
import SpeardOperator from './udmey/SpeardOperator';
import Main from './keeper/Main';


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
  <div className='w-screen h-screen bg-white '  >
  
  {/* <Login isRegistered={isAuthenticated} /> */}
  {/* <Inlinecss/>
  <div className="border">hello {name} {profession} </div>
  <Propsconcept/>
  <Emoji/> */}
   {/* <p>{mytime}</p> */}
   {/* <button onClick={gettime()}>get time</button> */}
   {/* <Desructure/> */}


{/* TO DO List */}
{/* <SpeardOperator/> */}

{/* Keeper App */}
<Main/>


  </div>

  );
}

export default App;
