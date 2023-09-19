import React, {useState} from "react";


function CounterFunction(){

var [number,setNumber] = useState(0)

function increment(){

    setNumber(++number)
}


    return(
        <div>
            <h1>Counter ={number}</h1>
            <button onClick={e => increment()}>Add</button>
        </div>
    )
}

export default CounterFunction;