import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './Register.css'




const Register = (props) => {

  const [confirmPassword, setConfirmPasswword] = useState('')
  const registerUsername = props.registerUsername
  const registerPassword = props.registerPassword
  const registerName = props.name
  const setUsername = props.setUsername
  const setPassword = props.setPassword
  const setName = props.setName
  const registerHandle = props.registerHandle
  
  
  return (

      
    <div>
      

      <form id = "registerForm" onSubmit={registerHandle}>
        
        <label id= "registerText">Register </label>  
        
        <TextField name ="username" value={registerUsername} label = "username" variant="outlined" size ="small"  onChange = {({ target }) => setUsername(target.value)}></TextField>    
        <TextField name ="password" value = {registerPassword} label = "password" type ="password" variant="outlined" size ="small"  onChange = {({ target }) => setPassword(target.value)}></TextField>    
        <TextField name ="confirmPassword"  type ="password" label = "Confirm Password" variant="outlined" size ="small" onChange = {({ target }) => setConfirmPasswword(target.value)} ></TextField> 
        <TextField name ="name" value = {registerName} label = "Name/Author" variant="outlined" size ="small" onChange = {({ target }) => setName(target.value)} ></TextField>    
        <Button id="registerBtn" type="submit" variant="contained"  > Register </Button>

        </form>
      </div>
    )
  }

 
  
  
  export default Register
  
  