import axios from 'axios';

const url = '/api/register'


const registerProcess = async (username, name, password) => {

    const registrationDetails = {

        username,
        name,
        password

    }

    const response = await axios.post(url, registrationDetails)


    return response.data


}


export default {registerProcess}