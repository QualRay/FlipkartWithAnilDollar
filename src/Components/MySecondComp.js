import React, { useState } from 'react';

function MySecondComp() {

    // 1  variable --> Function --------> Initial Value ---> Optional
    const [salary, setSalary] = useState(50000)

    //2 Create Function -------- Optional

    let incr = () => {
        setSalary(salary + 20000)
    }
    
    /*3 { expressions }  and { () => {} } is known as annonymous callback -----> Mandatory */ 
    return (
        <div>
            <button onClick={() => {incr(); }}>Make my increment</button>
            <h1>Your salary is { salary }</h1>
        </div>
    )
}

export default MySecondComp;
