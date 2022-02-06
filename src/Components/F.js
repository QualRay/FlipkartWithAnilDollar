import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

function F() {

    //set state from
    // hook variable ---> variablename, setFunctionName --> initial data
    const [studentName, setStudentName] = useState('');

    //funtion with fat arrow notation

    let myFunction = () =>{
        console.log( studentName );
        // Call API Here
        // This is also called promise chain
        //fetch().then().catch().finally();

        var data = {
                "data": {
                  "Name": studentName
                }
              }
        

        fetch('http://localhost:1337/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((d)=>{
            console.log(d.status);
            if(d.status === 200){
                swal("Good Job!","Data created successfully!","Success");
            }
        }).catch((e)=>{}).finally((all)=>{});
    }

    //useHooks -->
    // useEffect(<function>, <dependency>) formula fat arrow annonymous function ,dependency on empty array []

    useEffect( () => {} , []);
    
  
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
