import { useState } from "react"


function MyFirstComponent() {
    const [y, setY] = useState(150)

    let testSet = () => {
     setY( y + 100); 
    }
    return (
    <>
    <div>
      The value of 'y' is { y } 
     
      <button onClick={() => {testSet(); }}>Boost!!</button>
      <br />
    </div>
    </>
    )
  }

  export default  MyFirstComponent;