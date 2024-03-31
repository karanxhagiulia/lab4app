import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonList, IonItem, IonIcon, IonLabel, IonToast, IonMenuButton, IonButtons } from '@ionic/react';
import { appsOutline, homeOutline, logOutOutline, personAddOutline, walletOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Menu: React.FC = () => {
    const history = useHistory();
    const [showToast, setShowToast] = React.useState(false);

    const navigateTo = (path: string) => {
        history.push(path);
    };

    const handleLogout = () => {
        localStorage.clear();
        setShowToast(true); // Show the toast message
        setTimeout(() => {
            history.push('/login'); // Redirect after a short delay
        }, 2000); // Wait for 2 seconds
    };
    
    return (
        <IonMenu side="start" contentId="main">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem onClick={() => navigateTo('/')} lines="none">
                        <IonIcon slot="start" icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => navigateTo('/register')} lines="none">
                        <IonIcon slot="start" icon={personAddOutline} />
                        <IonLabel>Register</IonLabel>
                    </IonItem>
                    
                    <IonItem onClick={() => navigateTo('/mycryptolist')} lines="none">
                        <IonIcon slot="start" icon={walletOutline} />
                        <IonLabel>My Crypto List</IonLabel>
                    </IonItem>
                    <IonItem onClick={handleLogout} lines="none">
                        <IonIcon slot="start" icon={logOutOutline} />
                        <IonLabel>Logout</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="Successfully logged out"
                duration={1000}
            />
        </IonMenu>
    );
}

export default Menu;
