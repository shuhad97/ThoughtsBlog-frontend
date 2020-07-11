import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import Register from './components/Register'
import UserInfo from './components/User'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginService from './services/loginService'
import registerService from './services/registerService'

const App = () => {

  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [formVisible, setFormVisible] = useState(false) //Blog entry form
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [name, setName] = useState('')

  //Handles log in data from submitting 
  const loginHandle = async (event) => {

    event.preventDefault();

    try {
      const loginResponse = await loginService.loginProcess(username, password)
      const localData = {

        username: loginResponse.username,
        token: loginResponse.token

      }
      window.localStorage.setItem('user', JSON.stringify(localData))

      setUser(loginResponse)
      setUsername('')
      setPassword('')

    } catch (err) {

      console.log('wrong details')

    }

  }

  //Handles register data from submitting
  const registerHandle = async (event) =>{

    event.preventDefault();

    const registerResponse = await registerService.registerProcess(registerUsername, name, registerPassword)

    console.log(registerResponse)

  }

  //Loads each blog entry
  const loadBlogs = () => {

    return (

      blogs.map(blog =>
        <Blog key={blog.id} blog={blog} blogs={blogs} />
      )
    )

  }

  //Loads all of the forms
  const loadData = () => {

    return (
      <div>

        <UserInfo user={user} setUser={setUser} />
        <BlogForm blogs={blogs} setBlogs={setBlogs} formVisible={formVisible} setFormVisible={setFormVisible} />

      </div>
    )

  }

  //Loads register form component 
  const registerForm = () =>{

    return(
    
    <Register setUsername = {setRegisterUsername} setPassword = {setRegisterPassword} setName = {setName}
    registerHandle = {registerHandle} />
    
    )

  }

  //Loads login form component 
  const loginForm = () => {

    return (

      <Login setUsername={setUsername} setPassword={setPassword}
        loginHandle={loginHandle} />

    )

  }

  useEffect(() => {

    blogService.getAll().then(blogs =>

      setBlogs(blogs)

    )
    const localData = window.localStorage.getItem('user')

    if (localData) {

      setUser(JSON.parse(localData))

    }


  }, [])

  return (
    <div>

      {user === null && loginForm()}
      {user == null && registerForm()}
      <h2>blogs</h2>
      {user !== null && loadData()}
      {loadBlogs()}

    </div>
  )
}

export default App