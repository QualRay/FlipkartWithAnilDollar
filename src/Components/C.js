import React from 'react'

export default function C() {
    //1. State
    //simple variable
    const myFirstName = 'Ray';


    //Hook Variable
    // const [ variableName,  functionName] = hookVariable(value)
    //const [myLastName, setMyLastName] = useState('Rana');

    //2. Function 



    //3. Return Statement
    return (
        <div>
            Hello my first name is { myFirstName } 

            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
        
    )
}
