const actionBarReducer = ( state = false, action ) => {
    switch(action.type) {
        case 'ENABLE':
            return true;
        case 'DISABLE':
            return false;
        default:
            return false;
    }
}

export default actionBarReducer;