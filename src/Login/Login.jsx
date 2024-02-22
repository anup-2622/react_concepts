import React from "react";
import Form from "./Form";



function Login(props)

{
    console.log(props);
    return (
           <div className="w-1/2 bg-red-200 h-1/2">
            {/* {props.isRegistered  ? <h3>Hello User</h3> :<Form/> } */}

            <Form formChecking={props.isRegistered} />              
         
           </div> 
    )
}
export default Login