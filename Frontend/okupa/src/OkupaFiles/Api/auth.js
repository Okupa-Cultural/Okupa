import axios from 'axios';
import { endpoints , baseUri } from './endpoints';

export const loginUser = async ( username , password ) => {

    let success = false;

    await axios.post(baseUri.concat(endpoints.LOGIN) , { username , password })
        .then(res => {
            if(res.data.token) {
                storeToken(res.data.token);
                success = true;
            }
        });
    
    return success;
}

export const logoutUser = async ( username , token ) => {

    let success = false;

    await axios.post(baseUri.concat(endpoints.LOGOUT) , { username, token })
        .then(res => {
            if(res.data.token === "") {
                success = true;
            }
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

export const storeToken = token => {
    const storage = window.localStorage;
    storage.setItem("userToken", token);
}

export const getToken = () => {
    const storage = window.localStorage;
    return storage.getItem("userToken") || null;
}

export const removeToken = () => {
    const storage = window.localStorage;
    storage.removeItem("userToken");
}