import React from "react";

function Button(props){
    // console.log(props);
    return <button onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} className={props.validation ? props.class : "bg-red-300"} >{props.value}</button>
}


export default Button;