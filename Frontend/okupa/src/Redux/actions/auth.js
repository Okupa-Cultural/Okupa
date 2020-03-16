export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const setLogin = success => {
    return {
        type: 'LOGIN',
        payload: success
    } 
}