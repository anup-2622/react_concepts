import React, { useState } from 'react'

const Listitem = (props) => {
 
  return (
    <div onClick={()=>{props.onChecked(props.id)}}>
      <li className='font-mono'>{props.item}</li>
    </div>
  )
}

export default Listitem
