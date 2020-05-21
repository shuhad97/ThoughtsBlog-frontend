import React from 'react'


const login = (props) =>{

const setUsername = props.setUsername
const setPassword = props.setPassword
const loginHandle = props.loginHandle



return (
<div>
 
 <form onSubmit = {loginHandle}>
    
    Username <input name ="username"  onChange={({target}) => setUsername(target.value) } />
    Password <input name = "password" type ="password" onChange={({target}) => setPassword(target.value) } />
    <input id= "loginBtn" type ="submit" value = "login"/>

  </form>
</div>

)
}


export default  login

