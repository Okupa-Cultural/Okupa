import * as actionType from '../constants/action-types';

const initialState = {
    articles: [],
    userid: 0,
    selectedImage: '',
    fullscreenState: 2
};

function rootReducer(state = initialState, action) {
    if(action.type === actionType.ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles : state.articles.concat(action.payload)
        });
    }
    if(action.type === actionType.SET_SELECTEDIMAGE) {

        

        return Object.assign({}, state, {
            selectedImage: action.payload
        });
    }
    if(action.type === actionType.SET_FULLSCREENSTATUS) {

        var estado = 2;
        if(action.payload === 0) {
            estado = 2;
        } else {
            estado = 1;
        }

        return Object.assign({}, state, {
            fullscreenState: estado
        });
    }

    return state;
};

export default rootReducer;