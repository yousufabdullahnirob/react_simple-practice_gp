import React, { useState } from 'react'

export default function Counter(props) {
    const [count, setCount] = useState(0);
    
    const design = {
        border : '1px solid black',
        margin : '10px',
        padding : '10px',
        width : '200px',
        textAlign : 'center',
        backgroundColor : 'lightblue',
        color : 'black',
        fontSize : '20px',
        fontWeight : 'bold',
    };
    
    const increment = () => {
        setCount(count + 1);
    }

  return (
    <div style={design}>
        <h1>Counter : {count}</h1>
    <button onClick={increment}>Increment</button></div>
  )
}
