import React, { useState } from 'react'
import { Child } from './Child';

export const Parent = () => {
    const [count , setCount] = useState(0);

  return (
    <div>
        <Child addCount={count} call={()=> setCount(count+1) } />
    </div>
  )
}
