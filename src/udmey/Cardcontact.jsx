import React from 'react'

const Cardcontact = (props) => {
    console.log(props);
  return (
    <div className=' w-1/2 bg-red-300 '>
      <h2>{props.name}</h2>
      <img src={props.image} height={200}  className=' rounded-lg' width={200} alt="Avtar_" />
      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
  )
}

export default Cardcontact
