import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { setLogin } from '../../../Redux/actions/test';
import { logoutUser , getToken , removeToken} from  '../../Api/auth';

function Testing(props) {

    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    let user = {
        username: "usuarioprueba",
        password: "1234",
        email: "hidanshiraprueba@gmail.com"
    };

    const logout = async () => {
        await logoutUser(user.username, getToken())
            .then(value => {
                if(value) {
                    removeToken();
                    dispatch(setLogin(false));
                }
            });
    }
    

    return(
        <div>
            <h1>Hello world! I'm testing this page!</h1>
            <h2>Counter: { counter }</h2>
            <button onClick={ () => logout() }>Login!</button>
            <h3>Valuable Information I shouldn't see: { isLogged }</h3>
        </div>
    );
}

export default Testing;