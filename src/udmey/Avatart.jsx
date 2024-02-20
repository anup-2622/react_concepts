import React from "react";

function Avatar(props){
    console.log(props);
    return <img src={props.img}/>
}

export default Avatar;