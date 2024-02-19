import React from 'react'

export const Child = ({addCount , call }) => {
    const handleCount=()=>{
        call()
    }
  return (
    <div>
        <div className="count">{addCount}</div>
        <button onClick={handleCount}  >Add count</button>
    </div>
  )
}
