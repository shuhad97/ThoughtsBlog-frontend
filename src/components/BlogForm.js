import React from 'react'
import blogPostService from '../services/blogPostService'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import './BlogForm.css'
let blogs = undefined
let setBlogs = undefined

const Forms = (props) => {

    const formVisible = props.formVisible
    const setFormVisible = props.setFormVisible
    blogs = props.blogs
    setBlogs = props.setBlogs
    const hideButton = { display: formVisible ? 'None' : ''} //Button Shows when formVisible false
    const showForm = {display: formVisible ? '' : 'None'}

    return (

        <div id= "blog-form-container">
            <Button className="hide" variant="contained" style={showForm} onClick={() => { setFormVisible(false) }}>Hide blog form</Button>
            <Button className="display" variant="contained" style={hideButton} onClick={() => { setFormVisible(true) }}>Post a blog</Button>
            <form id= "blog-form-fields" style={showForm} onSubmit={blogPostHandle}>
            
               <div id = "details-container">
                    
                    <TextField  name="title" type="text" label = "Title" > </TextField>
                
             
                    <TextField  name="author" type="text" label ="Author"></TextField> 
              
                
                    <TextField name="url" type="text" label = "Profile URL"> </TextField>
               
               </div>
                
                <TextField id="content" name="content"   multiline rows={20}   variant="outlined" type ="text" label ="content" ></TextField>
                <div>
                <Button id="submitBtn" type="submit" value="Post"color ="secondary" variant="outlined"> Post </Button>
                </div>
            </form>

            
        </div>
    )


}

const blogPostHandle =  async (event) => {
   
    event.preventDefault()
    const target = event.target
    const authorization = JSON.parse(window.localStorage.getItem('user')).token

    const data = {
        title: target.title.value,
        author: target.author.value,
        url: target.url.value,
        content: target.content.value
    }

     const returnedData = await blogPostService.post(authorization, data)

    const newBlogList = blogs.concat(returnedData)
    setBlogs(newBlogList)
}


export default Forms