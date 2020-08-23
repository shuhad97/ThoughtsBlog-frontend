import axios from 'axios';

const url = '/api/blogs/'

const post =  async (authorization, data) =>{
    
    const returnData = await axios.post(url, data, {
        headers:{
            'Authorization': authorization
        }
    })

    return returnData.data
}


export default {post}