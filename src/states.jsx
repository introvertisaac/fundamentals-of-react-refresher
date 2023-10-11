import React from 'react'
import { useState } from 'react'


function States () {
    const [count, setCount] = useState(0);

    return(
     <div>
            <button onClick={()=> {
                setCount(count + 1);
            }}>increase</button>
            <button onClick={()=> {
                setCount(count - 1);
            }}>decrease</button>
            <button onClick={()=> {
                setCount(0);
            }}>set to zero</button>

            {count}
     </div>
    )
}
 
export default States