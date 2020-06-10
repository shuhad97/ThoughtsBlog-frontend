import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'


const id = 1;

const blog = {

    title: "The pandemic",
    author: "Shuhad",
    likes : 3
    
}

test('Login form check', ()=>{

    let component = render(<Blog  key = {id}  blog = {blog}/>)
    const title = component.container.querySelector('.title')
    
    expect(title).toHaveTextContent("The pandemic")

})

test('Blog author check', ()=>{


    let component = render(<Blog  key = {id}  blog = {blog}/>)
    const author = component.container.querySelector('.author')

    expect(author).toHaveTextContent("Shuhad")


})

test('Blog likes visibility check', ()=>{


    let component = render(<Blog  key = {id}  blog = {blog}/>)
    const likes = component.container.querySelector('.likes')

    expect(likes).toHaveTextContent("3")


})

