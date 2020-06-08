import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import UserInfo from './components/User'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginService from './services/loginService'


const App = () => {

  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginHandle = async (event) =>{

    event.preventDefault();

    try{
      const loginResponse = await loginService.loginProcess(username, password)
      const localData = {

        username: loginResponse.username,
        token: loginResponse.token

      }
      window.localStorage.setItem('user', JSON.stringify(localData) )
     
      setUser(loginResponse)
      setUsername('')
      setPassword('')

    } catch(err){

      console.log('wrong details')

    }
    
  }

  //Loads all of the forms
  const loadData = ()=>{

    return(
    <div>

      <UserInfo user = {user} setUser = {setUser}/>
      <BlogForm blogs = {blogs} setBlogs = {setBlogs}/>
      {loadBlogs()}
    </div>
    )
  
  }

const loginForm = () =>{

  return(
      <Login setUsername = {setUsername} setPassword = {setPassword} 
      loginHandle = {loginHandle} />
  )

}
 

  const loadBlogs = () =>{
    
    return (
     
    blogs.map(blog =>
        <Blog key={blog.id} blog={blog} blogs = {blogs} />
      )
    )

  }

  
 

  useEffect(() => {
    
    blogService.getAll().then(blogs =>
            setBlogs( blogs )
    )
    const localData = window.localStorage.getItem('user')

    if(localData){
      
      setUser(JSON.parse(localData))
      
    }

  
}, [])

  return (
    <div>
      { user === null && loginForm() } 
      <h2>blogs</h2> 
     
      {user !== null && loadData()}

 
      
    </div>
  )
}

export default App