import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon
} from '@ionic/react';
import { logoFacebook, logoGithub, logoInstagram, logoTwitter } from 'ionicons/icons';
import './Style/Profile.css';
import profileGif from './Style/profile.gif';

const iconStyle = {
  fontSize: '24px',
  margin: '0 10px',
  transition: 'color 0.3s'
};

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            flexDirection: 'column',
            padding: '20px',
            backgroundImage: 'url(https://www.example.com/background.jpg)', // Add a background image
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <IonCard style={{ width: '100%', maxWidth: '500px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <img alt="Profile" src={profileGif} style={{ display: 'block', borderRadius: '50%', width: '300px', margin: '20px auto' }} />
            
            <IonCardHeader>
              <IonCardTitle style={{ textAlign: 'center' }}>Arj Escape</IonCardTitle>
              <IonCardSubtitle style={{ textAlign: 'center' }}>3rd Year Student</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent style={{ textAlign: 'center' }}>
              <p>Passionate developer with experience in building web and mobile applications.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <IonIcon icon={logoFacebook} style={{ ...iconStyle }} className="hover-icon-facebook" />
                <IonIcon icon={logoInstagram} style={{ ...iconStyle }} className="hover-icon-instagram" />
                <IonIcon icon={logoGithub} style={{ ...iconStyle }} className="hover-icon-github" />
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;