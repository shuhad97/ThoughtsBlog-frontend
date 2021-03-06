import React from 'react'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import './Login.css'


const Login = (props) => {



  const setUsername = props.setUsername
  const setPassword = props.setPassword
  const loginHandle = props.loginHandle



  return (
    
    <div id = "loginForms">

      <form onSubmit={loginHandle}>

      <label id= "loginText">Login </label>  
      <TextField id="username"  label="Username" variant="outlined" size ="small" onChange={({ target }) => setUsername(target.value)} />
      <TextField id="password" label="Password" type = "password" variant="outlined" size ="small"  onChange={({ target }) => setPassword(target.value)} />
      <Button id="loginBtn" type="submit" variant="contained" color ="primary" > Login </Button>
        

      </form>
    </div>

  )
}


export default Login

