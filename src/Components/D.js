import React, { useState } from 'react';

import E from './E'
import F from './F'

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
        <E />
        <h1>Your current salary is { pay.toFixed(2) }</h1>
        <button onClick={() => {incr();}}>Increase</button>
        <br />
        <F />
        </>
      ) 
}

export default D;
