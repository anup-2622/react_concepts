import React from 'react'
import Avatar from './Avatart';

const Cardcontact = (props) => {
    // console.log(props);
  return (
    <div className='relative w-1/4 h-52 rouneded '>
    
    <div className='text-left bg-green-200 h-1/2'>
    <div className='px-2'>

      <h2>{props.name}</h2>
    </div>
      
      <Avatar img={props.image}/>
    </div>
    <div className='bg-blue-300 h-1/2'>

      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
    </div>
  )
}

export default Cardcontact
