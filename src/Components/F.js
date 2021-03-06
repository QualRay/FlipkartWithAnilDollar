import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { BASE_URL, headers }  from '../Helper'

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
        

        fetch(BASE_URL+'/api/students', {
            method: 'POST',
            headers: headers ,
            body: JSON.stringify(data)
        }).then(response => response.json()) //This will make JSON data readable
        .then((d)=>{
            console.log(d);
            //Success
            //console.log(d.status);
            if(d.data != null){
                swal("Good Job!","Data created successfully!","Success");
            }
            if(d.error.status === 403){
                swal(d.error.name,d.error.message,"error");
            }
        }).catch((e)=>{
            //error block
            console.log(e);
        }).finally((all)=>{});
    }

    //useHooks -->
    // useEffect(<function>, <dependency>) formula fat arrow annonymous function ,dependency on empty array []

    useEffect( () => {} , []);
    
  
    return (
        <>
            <form>
                <label>Enter Student Name:
                    <input autoFocus type="text" value={ studentName } onChange={ (e)=>{ setStudentName(e.target.value) }} />
                </label>
            </form>
            <br />
            <input type="button" onClick={ myFunction } name="studentName" value = "Save Student" />
        </>
    )
}

export default F;
