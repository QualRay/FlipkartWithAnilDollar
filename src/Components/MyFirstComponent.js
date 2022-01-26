import { useState } from "react"


function MyFirstComponent() {
    const [y, setY] = useState(150)
    return <h1>
      The value of 'y' is {y}
    </h1>;
  }

  export default  MyFirstComponent;