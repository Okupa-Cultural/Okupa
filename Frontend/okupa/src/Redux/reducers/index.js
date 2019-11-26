import * as actionType from '../constants/action-types';

const initialState = {
    articles: [],
    userid: 0,
    selectedImage: '',
    fullscreenState: 2,
    ocultarActionBar: 0,
    notifications: [],
    notificacionesSinLeer: 0,
};

function rootReducer(state = initialState, action) {
    if(action.type === actionType.ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles : state.articles.concat(action.payload)
        });
    }
    if(action.type === actionType.SET_SELECTEDIMAGE) {

        let nuevoEstado = JSON.parse(JSON.stringify(state));
        nuevoEstado.selectedImage = action.payload;

        return nuevoEstado;
    }
    if(action.type === actionType.SET_FULLSCREENSTATUS) {
        // eslint-disable-next-line
        var estado = 2;
        if(action.payload === 0) {
            estado = 2;
        } else {
            estado = 1;
        }

        let nuevoEstado = JSON.parse(JSON.stringify(state));
        nuevoEstado.fullscreenState = estado;
        return nuevoEstado;
    }

    if(action.type === actionType.SET_ACTIONBARDISPLAY) {

        let nuevoEstado = JSON.parse(JSON.stringify(state));
        nuevoEstado.ocultarActionBar = action.payload;
        return nuevoEstado;
    }

    return state;
};

export default rootReducer;