import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './Register.css'




const Register = (props) => {

  const [confirmPassword, setConfirmPasswword] = useState('')
  const setUsername = props.setUsername
  const setPassword = props.setPassword
  const setName = props.setName
  const registerHandle = props.registerHandle
  
  
  return (
    <div>
      

      <form id = "registerForm" onSubmit={registerHandle}>
        <ul id = "registerFields">
          <p>Register </p>
          <li>
            <TextField name ="username" label = "username" variant="outlined" size ="small"  onChange = {({ target }) => setUsername(target.value)}></TextField>    
          </li> 
          <li>
            <TextField name ="password" label = "password" type ="password" variant="outlined" size ="small"  onChange = {({ target }) => setPassword(target.value)}></TextField>    
          </li>
          <li>
            <TextField name ="confirmPassword"  type ="password" label = "Confirm Password" variant="outlined" size ="small" onChange = {({ target }) => setConfirmPasswword(target.value)} ></TextField> 
          </li>
           <li> 
          <TextField name ="name" label = "Name/Author" variant="outlined" size ="small" onChange = {({ target }) => setName(target.value)} ></TextField>    
           </li> 
           <li>
           <Button id="registerBtn" type="submit" variant="contained" color ="secondary" > Register </Button>
           </li>  
        </ul>  

            

        </form>
      </div>
    )
  }

 
  
  
  export default Register
  
  