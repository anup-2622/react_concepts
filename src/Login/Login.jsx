import React from "react";
import Form from "./Form";

const isAuthenticated = false;

function Login()
{
    return (
           <div className="w-1/2 bg-red-200 h-1/2">
            {isAuthenticated ? <h3>Hello User</h3> :<Form/> }
               
         
           </div> 
    )
}
export default Login