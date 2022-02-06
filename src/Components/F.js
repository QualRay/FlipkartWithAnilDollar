import React, { useState } from 'react';

function F() {

    //set state from
    // hook variable ---> variablename, functionName --> initial data
    const [studentName, setStudentName] = useState('');

    //funtion with fat arrow notation

    let myFunction = () =>{
        console.log( studentName );
    }
  
    return (
        <>
            <form>
                <label>Enter Student Name:
                    <input type="text" value={ studentName } onChange={ (e)=>{ setStudentName(e.target.value) }} />
                </label>
            </form>
            <br />
            <input type="button" onClick={ myFunction } name="studentName" value = "Save Student" />
        </>
    )
}

export default F;
