import React, { useState } from 'react'
import Axios from 'axios'
import Button from '@material-ui/core/Button';
import './Blog.css'
const baseUrl = '/api/blogs'

//Individual blog posts
const Blog = ({ blog }) => {

  const [localBlogState, setLocalBlogState] = useState(blog)
  //Small component refresh rather than the whole blog list
  
  return (

    <div id = "blogpost-container">
      <div id="blogcontent-container">
        <h1 className="title"> {localBlogState.title}</h1>
        <h2 className="author"> {localBlogState.author}</h2>
        <p className="content"> {localBlogState.content}</p>
      </div> 
      <div id = "blogLikes-containter">
        <Button className="likesBtn" variant="outlined" onClick={() => {

          updateLike(localBlogState, setLocalBlogState)

        }} >like!</Button>
         &#x1F44D; 
        
        <p className="likes">{localBlogState.likes ? localBlogState.likes : 0}</p>
      </div>
     
    </div>
  )
}


const updateLike = (localBlogState, setLocalBlogState) => {

  const updateData = {
    ...localBlogState,
    likes: localBlogState.likes + 1
  }

  Axios.put(baseUrl + `/${localBlogState.id}`, updateData)
    .then(response => {

      setLocalBlogState(response.data)

    })

}


export default Blog  //Export for components
