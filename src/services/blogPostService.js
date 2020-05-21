import axios from 'axios';

const url = '/api/blogs/'

const post = async (authorization, data) =>{
    
    await axios.post(url, data, {
        headers:{
            'Authorization': authorization
        }
    })

    
}


export default {post}