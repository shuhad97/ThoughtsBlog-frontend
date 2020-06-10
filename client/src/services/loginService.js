import axios from 'axios'
const url = '/api/login/'


const loginProcess = async (username, password) =>{
     
    const user = {

        username,
        password

    }

  
    const response =  await axios.post(url, user)
    
    return response.data
   
     
}

export default {loginProcess} //For JSX methods