import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';





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
        
        <TextField name ="username" label = "username" variant="filled" size ="small"  onChange = {({ target }) => setUsername(target.value)}></TextField>    
        <TextField name ="password" label = "password" type ="password" variant="filled" size ="small"  onChange = {({ target }) => setPassword(target.value)}></TextField>    
        <TextField name ="confirmPassword"  type ="password" label = "Confirm Password" variant="filled" size ="small" onChange = {({ target }) => setConfirmPasswword(target.value)} ></TextField>    
        <TextField name ="name" label = "Name/Author" variant="filled" size ="small" onChange = {({ target }) => setName(target.value)} ></TextField>    

        <Button id="registerBtn" type="submit" variant="contained" color ="secondary" > Register </Button>


            

        </form>
      </div>
    )
  }

 
  
  
  export default Register
  
  