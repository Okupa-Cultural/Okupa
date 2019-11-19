import store from './store/index';
import * as actions from './actions/index';

window.store = store;
window.addArticle = data => actions.addArticle(data);
window.setToFullscreenSelectedImage = data => actions.setToFullscreenSelectedImage(data); 
window.setFullscreenStatus = data => actions.setFullsceenImage(data);
window.mostrarOcultarActionBar = data => actions.mostrarOcultarActionBar(data);