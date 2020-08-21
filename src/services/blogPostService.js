import axios from 'axios';

const url = '/api/blogs/'

const post =  (authorization, data) =>{
    
     axios.post(url, data, {
        headers:{
            'Authorization': authorization
        }
    }).then(response =>{

        return response.data

    })

    
}


export default {post}