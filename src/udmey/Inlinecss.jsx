import React from 'react'

const time = new Date().getHours();
// console.log(time);
const greetingColor ={
    color:"",
}
let greeting ;
if(time < 12 )
{
    greeting ="Good Morning";
    greetingColor.color= 'red';
}
else if(time < 18){
    greeting = "good AfterNoon";
    greetingColor.color= 'blue';
    
}
else{
    greeting = "Good Evening";
    greetingColor.color= 'green';
}
const Inlinecss = () => {
   
    return (
    <div>
        <h1 style={greetingColor}>{greeting}</h1>
    </div>
  )
}

export default Inlinecss