import React from 'react'


const login = (props) =>{
   
    const user = props.user
    const setUser = props.setUser
  

   console.log(user)
return (
<div>
 
<h2>{user.username} logged in</h2>
<button onClick = {() =>{
    window.localStorage.removeItem('user');
    setUser(null)

}} >Logout</button>
</div>

)
}


export default  login
