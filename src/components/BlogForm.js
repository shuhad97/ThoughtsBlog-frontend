import React from 'react'
import blogPostService from '../services/blogPostService'

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

        <div>
            <button className="hide" style={showForm} onClick={() => { setFormVisible(false) }}>Hide blog form</button>
            <button className="display" style={hideButton} onClick={() => { setFormVisible(true) }}>Show blog form</button>
            <form style={showForm} onSubmit={blogPostHandle}>

                Title <input name="title" type="text" />
                Author<input name="author" type="text" />
                Content<textarea name="content"  ></textarea>
                URL<input name="url" type="text" />
                <input id="submitBtn" type="submit" value="Post" />

            </form>
        </div>
    )


}

const blogPostHandle = (event) => {
   
    event.preventDefault()
    const target = event.target
    const authorization = JSON.parse(window.localStorage.getItem('user')).token

    const data = {
        title: target.title.value,
        author: target.author.value,
        url: target.url.value,
        content: target.content.value
    }

    blogPostService.post(authorization, data)
    const newBlogList = blogs.concat(data)
    setBlogs(newBlogList)
}


export default Forms