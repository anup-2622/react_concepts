import React , {useState} from "react";

const Listkeeper = (props) => {
  
  return (
    // <div className="flex flex-wrap w-5/6 gap-2 px-2 py-4 my-4 bg-green-100 rounded-lg ">
    //   {lists.map((list, index) => (
        <div
        
          className="relative w-64 h-48 text-center bg-white border rounded card "
        >
          <div>
            <p>{props.data.title}</p>
            <p> {props.data.note}</p>
          </div>
          <div>
            <button onClick={()=>{props.onChecked(props.id)}} className="absolute px-4 py-2 bg-red-400 rounded -bottom-3 right-3 hover:bg-red-300">
              Del
            </button>
          </div>
        </div>
    //   ))}
    // </div>
  );
};

export default Listkeeper;
