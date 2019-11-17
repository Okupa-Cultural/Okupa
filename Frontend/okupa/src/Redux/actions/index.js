// eslint-disable-next-line
import * as actionType from '../constants/action-types';

export function addArticle(payload) {
    return { type: 'ADD_ARTICLE', payload}
};

export function setToFullscreenSelectedImage(payload) {
    return { type: 'SET_SELECTEDIMAGE', payload}
};

export function setFullsceenImage(payload) {
    return { type: 'SET_FULLSCREENSTATUS', payload}
};