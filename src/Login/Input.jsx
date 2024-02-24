import React from "react";

function Input(props){
    return <input type={props.type} onChange={props.onChange} value={props.value} placeholder={props.placeholder}  className="p-2 my-1 rounded-md outline-none"/>
}

export default Input