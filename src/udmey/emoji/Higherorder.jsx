import React from "react";
import emojipedia from "./emojipedia";
// console.log(emojipedia);

var meaning = emojipedia.map((data)=>(
   data.meaning.substring(0,100)
   
))
console.log(meaning);

function Higheorder(){
return(
<div>
    hello
</div>
)
}
export default Higheorder;

// var emojipedia = require("./emojipedia")