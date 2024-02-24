import React, { useState } from "react";
import Listitem from "./Listitem";

function SpeardOperator(){

    const [task , setTask] = useState("")

    const [lists , setLists] = useState([]);

    function handleChange (event){

        setTask(event.target.value)

    }
    function handleSubmit(){
        
        if(task !== "")
        {
              setLists((preVal)=>[...preVal , task ]); 
              setTask("");
        }
    }

    function handledelete(id)
    {
   
        setLists((prev)=>{
           return prev.filter((item , index)=>{
                return index !== id;
            })
        })

    }
    
    return(
        <div className="flex flex-col items-center justify-center w-screen">
            <div className="">

            <h4 className="font-serif text-xl ">  To Do List's </h4>
            </div>

            <div className="w-1/2 bg-gray-100 inputsec h-fit">
                <input type="text" onChange={handleChange} placeholder="Enter Your Tasks" value={task} className="p-2 " /> <button onClick={handleSubmit} className="p-2 bg-blue-400 rounded hover:to-blue-300">Submit</button>

                <div className="listsec">
                    <ul>
                    {lists.map((list , index)=>
                                <Listitem key={index} onChecked={handledelete} id={index} item={list}/>   
                    
                    )}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default SpeardOperator