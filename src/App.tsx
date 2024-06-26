import React from 'react';
import { IonApp, IonMenu, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './components/Menu';
import MyCryptoList from './pages/MyCryptolist';

import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <Menu />
            <IonRouterOutlet id="main">
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
                <Route path="/mycryptolist" component={MyCryptoList} exact />

            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);

export default App;
