import React, { useState } from "react";

function Counter(){

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // setNumber(number + 1);
        setNumber(prevNum => prevNum + 1);
    }

    const onDecrease = () => {
        // setNumber(number - 1);
        setNumber(prevNum => prevNum - 1)
    }
 
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter;