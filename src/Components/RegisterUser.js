import React, { useState } from 'react';

function RegisterUser() {
    //1. State

    const [ username, setUserName] = useState('AAA');
    const [ email, setEmail] = useState('b@gmail.com');
    const [ password, setPassword] = useState('Confidential');



    //2. Functions and


    //3. Return Statements
  return (
      <form>
          <input type="text" name="UserName"  value ={ username }/><br />
          <input type="email" name="Email" value={ email }/><br />
          <input type="password" name="Password"  value = { password }/><br />
          <input type="submit" name="Submit" />
      </form>
  );
}

export default RegisterUser;
