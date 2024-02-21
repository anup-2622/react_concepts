import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <div className="flex items-center justify-center border">
      <form>
        <div>
          <Input type={"text"} placeholder={"User Name"} />
        </div>
        <div>
          <Input type={"password"} placeholder={"password"} />
        </div>
        <div className="text-center ">
            <Button value={"Submit"} class={"p-2 bg-blue-400 border rounded-md "}/>
          <button className="p-2 bg-blue-400 border rounded-md ">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
