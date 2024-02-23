import React, { useState } from "react";

import cars from "./destructuring";
import Input from "../Login/Input";
import Button from "../Login/Button";
// console.log(cars);
function Desructure() {

    const [headingText , setHeadingText] = useState("Hello");
    const [isMouseover , setIsMouse] = useState(false)

function mouseOver(){
    setIsMouse(true)
}
function mouseOut(){
    setIsMouse(false)
}



  const [honda, tesla] = cars;


  const {
    coloursByPopularity: [hondaTopColour],
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour],
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;


  function handlingSubmit(){
    setHeadingText("Submited")
    setTimeout(() => {
        setHeadingText("Hello User")
    }, 1000);
  }

  function onMouseOver(){

  }


  //   console.log(model + firstcolor + secondcolor + topSpeed + zeroToSixty);
  return (
    <div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Brand color </th>
        </tr>

        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.model}</td>
            <td>{car.speedStats.topSpeed}</td>
            <td>
              {car.coloursByPopularity.map((color) => (
                <tr>
                  {" "}
                  <td>{color}</td>
                </tr>
              ))}
            </td>
          </tr>
        ))}

        <tr>
          <th colSpan={3}> using Destructure </th>{" "}
        </tr>

        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>

<div className="my-4">

    <h3>{headingText}</h3>
    <Input type={"text"} placeholder={"Enter your Name"}/>
    <Button onMouseover={mouseOver} onMouseOut={mouseOut} onClick={handlingSubmit} validation={isMouseover} value={"Submit"} class={"p-2 bg-green-400 rounded mx-2"}/>
</div>

    </div>
  );
}

export default Desructure;
