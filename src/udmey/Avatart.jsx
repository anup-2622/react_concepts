import React from "react";

function Avatar(props){
    // console.log(props);
    return(
        <div className="absolute w-24 h-24 p-1 bg-white rounded-full right-5 top-1/4 ">

        <img src={props.img} className="rounded-full "/>
        </div>

    );
}

export default Avatar;