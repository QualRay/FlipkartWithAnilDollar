import React, { useState } from 'react';

function D() {
    //1. State
    //2. Function 
    //3. Return Statement

    const [pay, setPay] = useState(115000);

    let incr =() =>{
        setPay(pay + (pay * 2.5/100));
    }
    


  return (
        <>
        <h1>Your current salary is {pay}</h1>
        <button onClick={() => {incr();}}>Increace</button>
        </>
      ) 
}

export default D;
