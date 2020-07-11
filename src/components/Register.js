import React, { useState } from 'react'




const Register = (props) => {

  const [confirmPassword, setConfirmPasswword] = useState('')
  const setUsername = props.setUsername
  const setPassword = props.setPassword
  const setName = props.setName
  const registerHandle = props.registerHandle
  
  
  return (
    <div>
      <h2>Register</h2>
      <form name = "registerForm" onSubmit={registerHandle}>
            
        Username<input name ="username" onChange = {({ target }) => setUsername(target.value)}/>
        Password<input name = "password" onChange = {({ target }) => setPassword(target.value)}/>
        confirm password <input name = "confirmPassword" onChange = {({ target }) => setConfirmPasswword(target.value)}/>
        Name/Author<input name ="name" onChange = {({ target }) => setName(target.value)}/>

            
        <input id="registerBtn" type="submit" value="Register" />

        </form>
      </div>
    )
  }

 
  
  
  export default Register
  
  