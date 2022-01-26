import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import A from './Components/A';
import './index.css';
import Message from './Message'
import Hoc from './Components/Hoc'
import MyFirstComponent from './Components/MyFirstComponent'
import MySecondComp from './Components/MySecondComp'


function Student({mentor}){
  return <>
  <strong> {mentor}!</strong>
  <Message />
  </>
  
}

// Creating a functional component
function App({data}){
  //A funtion always returns something
  // A functional component always returns JSX syntax
  return <h1>Hello <Student mentor={'Ray S Rana'}/></h1>

}

function Courses(){
  return (
    <>
      <div className="courseA">Chemistry</div>
      <div className="courseB">Biology</div>
      <div className="courseC">Physics</div>
    </>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
    <A />
    <Courses />
    <MyFirstComponent />
    <MySecondComp />
  </React.StrictMode>,
  document.getElementById('container')
);