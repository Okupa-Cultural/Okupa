import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { increment } from '../../../Redux/actions/test';

function Testing() {

    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Hello world! I'm testing this page!</h1>
            <h2>Counter: { counter }</h2>
            <button onClick={ () => dispatch(increment()) }>Increment!</button>
            <h3>Valuable Information I shouldn't see: { isLogged }</h3>
        </div>
    );
}

export default Testing;