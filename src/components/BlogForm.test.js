import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'



test('Blog form hide/display check', ()=>{


    let component = render(       <BlogForm blogs = {undefined} setBlogs = {undefined} formVisible ={undefined} setFormVisible ={ undefined}/>
        )  
    
    const hide = component.container.querySelector('.hide')
    
    fireEvent.click(hide)

    

   const display = component.container.querySelector('.display')
    
   fireEvent.click(display)

 

})