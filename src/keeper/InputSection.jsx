import React, { useState } from 'react'

const InputSection = (props) => {

const [details , setDetails ] = useState({
  title:"",
  note:""
})

function handleChange(event){
   const {name , value} = event.target;

setDetails((prev)=>{

  return{
    ...prev,
    [name]:value
  }
})
// setDetails([])
}

 function handleSubmit(){
    props.onAdd(details)
    setDetails({title:"" , note:""})
 }

  return (
    <div className='relative w-2/4 px-2 py-4 my-1 bg-gray-300 rounded shadow-xl h-fit'>
        <div className='flex flex-col'>

        <input onChange={handleChange} name='title' value={details.title} type="text" placeholder='Title.........' className='w-3/5 p-2 m-1 rounded-md' />
        <input onChange={handleChange} name='note' value={details.note} type="text" placeholder='Take a note' className='w-3/5 p-2 m-1 rounded-md' />
        </div>
        <div className='absolute -bottom-3 right-3 '>
            <button onClick={handleSubmit} className='p-2 px-5 text-xl text-center bg-blue-400 rounded-md w-fit hover:bg-blue-300'> add  </button>
        </div>
      
    </div>
  )
}

export default InputSection
