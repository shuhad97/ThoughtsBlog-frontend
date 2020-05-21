import React from 'react'
import blogPostService from '../services/blogPostService'


let blogs= undefined
let setBlogs = undefined

const forms = (props) =>{

     blogs = props.blogs
     setBlogs = props.setBlogs

    return(
        <form onSubmit = {blogPostHandle}>

            Title <input name="title" type="text" />
            Author <input name="author" type="text" />
            URL <input name="url" type="text" />

            
           <input id = "submitBtn" type = "submit" value = "Post"/>


        </form>
    )

    
}

const blogPostHandle = (event) =>{
    event.preventDefault()    

    const target = event.target
    const authorization = JSON.parse(window.localStorage.getItem('user')).token
   
    const data = {
        title: target.title.value,
        author: target.author.value,
        url: target.url.value
    }

    blogPostService.post(authorization, data)
    const newBlogList = blogs.concat(data)
    setBlogs(newBlogList)

}

export default forms