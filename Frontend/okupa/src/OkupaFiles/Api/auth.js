import axios from 'axios';
import { endpoints , baseUri } from './endpoints';

export const loginUser = async ( username , password ) => {

    axios.post(baseUri.concat(endpoints.LOGIN) , { username : username, password : password})
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    
}

export const logoutUser = async ( username , token ) => {

    let success = false;

    await axios.post(baseUri.concat(endpoints.LOGOUT) , { username, token })
        .then(res => {
            console.log(res);
            console.log(res.data);
            success = true;
        });
    
    return success;
}

export const signupUser = async data => {

   await axios.post(baseUri.concat(endpoints.SIGNUP) , { ...data })
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
}