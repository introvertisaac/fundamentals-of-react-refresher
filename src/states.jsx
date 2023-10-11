import React from 'react'
import { useState } from 'react'

const States = () => {

    const [inputValue, setInputValue] = useState("");

    const handleChange= (e) => {

        setInputValue(e.target.value);


    }

  return (

    <div>
        <input type='text' onChange={handleChange}/>   
        {inputValue} 
    
    </div>
  )
}
 
export default States