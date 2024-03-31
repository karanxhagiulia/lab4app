import React from 'react';
import { IonContent, IonButtons, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonRouterOutlet, IonMenuButton } from '@ionic/react';
import './Home.css';
import { IonReactRouter } from '@ionic/react-router';
import { useHistory } from 'react-router-dom';
import { walletOutline } from 'ionicons/icons';
import Menu from '../components/Menu';
import MyCryptoList from './MyCryptolist';
const Home: React.FC = () => {
  const history = useHistory();

  const handleLogin = () => {
    console.log("Login button clicked");
    history.push('/login');
  };

  const handleRegister = () => {
    console.log("Register button clicked");
    history.push('/register');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <Menu />
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="ion-padding">
          <h1>Welcome to the Crypto Tracker App</h1>
          <IonButton routerLink="/login">Log In</IonButton>
          <IonButton routerLink="/register">Register</IonButton>
          <div>
            <IonButton routerLink="/mycryptolist">My Crypto List</IonButton></div>
        </div>
      </IonContent>
    </IonPage>
  );
};


export default Home;
