import React, { useState } from 'react';

function E() {
    //1. State
    //2. Function --------
    //3. Return Statement
    const [payGrade, setPayGrade] = useState('E1');
  

  return (
    <div> Your pay grade is {payGrade} </div>
  )
 
}

export default E;
