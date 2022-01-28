import React, { useState } from 'react'

export default function C() {
    //1. State
    //simple variable
    const myFirstName = 'Ray';


    //Hook Variable
    // const [ variableName,  functionName] = hookVariable(value)
    const [myLastName, setMyLastName] = useState('Rana');

    //2. Function 



    //3. Return Statement
    return (
        <div>
            Hello my first name is { myFirstName } and my last name is { myLastName }

            <ul class="list-group">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
        </div>
        
    )
}
