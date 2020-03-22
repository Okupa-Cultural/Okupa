//Pantallas
import HomeScreen from '../Screens/HomeScreen';
import Login from '../Screens/Login';
import Perfil from '../Screens/Perfil';
import Evento from '../Screens/Evento';
import Feed from '../Screens/Feed';
import Mantenimiento from '../Screens/Mantenimiento/Mantenimiento';
import UsuarioABM from '../Screens/UsuarioABM';
import EventoABM from '../Screens/EventoABM';
import Notificaciones from '../Screens/Notificaciones';
import Test from '../Screens/Testing/Testing';
import Config from '../Screens/Config';
import Chat from '../Screens/Chat';

const routes = {
    Homescreen : HomeScreen,
    Login: Login,
    Prophile: Perfil,
    Event: Evento,
    Feed: Feed,
    Manteinance: Mantenimiento,
    UserABM: UsuarioABM,
    EventoABM: EventoABM,
    Notifications: Notificaciones,
    Testing: Test,
    Config: Config,
    Chat: Chat,
};

export default routes;