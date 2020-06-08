import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('Login form check', ()=>{

    const id = 1;
    const blog = {
        title: "The pandemic",
        author: "Shuhad",
        likes : 3
    }

    let component = render(<Blog  key = {id}  blog = {blog}/>)
    const title = component.container.querySelector('.title')
    
    expect(title).toHaveTextContent("The pandemic")

})