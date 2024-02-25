import React, { useState } from "react";
import Header from "./Header";
import InputSection from "./InputSection";
import Listkeeper from "./Listkeeper";

function Main(){

    const [lists , setList] = useState([])

    function addNote(note)
    {
        setList((prev)=>[ ...prev, note ]
        )
    }

    // console.log(lists);

    function handleDel(id){
     setList((prev)=>{
        return prev.filter((item , index)=>{
            return index !== id ;
        })
     })   
    }

    return (
        <div className="flex flex-col items-center justify-center">
          
            <Header/>
            <InputSection onAdd={addNote}/>
            {lists.map((list , index)=> (     
                    <Listkeeper key={index} onChecked={handleDel} id={index} data={list} />
            ))
            }
            {/* <Listkeeper data={lists}/> */}
       
        </div>
    )
}

export default Main;