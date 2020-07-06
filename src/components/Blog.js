import React, { useState } from 'react'
import Axios from 'axios'
const baseUrl = '/api/blogs'

//Individual blog posts
const Blog = ({ blog }) => {

  const [localBlogState, setLocalBlogState] = useState(blog)
  //Small component refresh rather than the whole blog list
  return (
    <div>
      <h1 className="title">{localBlogState.title}</h1>
      <p className="author">{localBlogState.author}</p>
      <p className="content">{localBlogState.content}</p>
    Likes<p className="likes">{localBlogState.likes ? localBlogState.likes : 0}</p>

      <button className="likesBtn" onClick={() => {

        updateLike(localBlogState, setLocalBlogState)

      }} >like!</button>

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
