import React from "react";

import cars from "./destructuring";
// console.log(cars);
function Desructure() {
  const [honda, tesla] = cars;


  const {

    coloursByPopularity: [hondaTopColour],
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {

    coloursByPopularity: [teslaTopColour ],
    speedStats: { topSpeed : teslaTopSpeed },
  } = tesla;

//   console.log(model + firstcolor + secondcolor + topSpeed + zeroToSixty);
  return (
    <div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Brand color </th>
        </tr>

{ cars.map((car)=>(
    <tr key={car.id}>
        <td>{car.model}</td>
        <td>{car.speedStats.topSpeed}</td>
        <td>{car.coloursByPopularity.map((color)=>(<tr> <td>{color}</td></tr>))}</td>
    </tr>

)) }

<tr><th colSpan={3}> using Destructure </th> </tr>

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
    </div>
  );
}

export default Desructure;
