import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <div className="flex items-center justify-center border">
      <form>
        <div>
          <Input type={"text"} placeholder={"User Name"} />
        </div>
        <div>
          <Input type={"password"} placeholder={"password"} />
        </div>
        <div>
         {
// (props.formChecking === false ) && <Input type={"password"} placeholder={"confirm password"} />
(!props.formChecking) && <Input type={"password"} placeholder={"confirm password"} />
         }
        </div>
        <div className="text-center ">
           {
            (props.formChecking)? <Button value={"Login"} class={"p-2 bg-blue-400 border rounded-md "}/> : <Button value={"Register"} class={"p-2 bg-blue-400 border rounded-md "}/>
           }
  
        </div>
      </form>
    </div>
  );
}

export default Form;
