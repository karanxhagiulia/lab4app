// Profile.tsx

import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonText } from '@ionic/react';
import { getUserProfile } from '../api'; // Import function to fetch user profile

const Profile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile(); // Implement this function to fetch user profile data
        setUserProfile(profileData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();

    // Cleanup function
    return () => {
      // Perform any cleanup if necessary
    };
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {userProfile && (
          <div className="ion-padding">
            <IonAvatar>
              <img src={userProfile.avatarUrl} alt="Profile" />
            </IonAvatar>
            <IonText>{userProfile.name}</IonText>
            <IonText>{userProfile.email}</IonText>
            {/* Display other user profile information */}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
