import { 
  IonButtons,
  IonButton,
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
        <div className='whole-ion-content'>
          <IonCard className="profile-card">
            <img alt="Profile" src={profileGif} className="profile-border" />
            
            <IonCardHeader className="txt-center-profile">
              <IonCardTitle>Arj Escape</IonCardTitle>
              <IonCardSubtitle>3rd Year Student</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <p className="txt-center-profile">Passionate Student with average experience in building web and mobile applications.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <IonIcon icon={logoFacebook} style={{ ...iconStyle }} className="hover-icon-facebook" onClick={() => window.open('https://www.facebook.com/Arj.escaped')} />
                <IonIcon icon={logoInstagram} style={{ ...iconStyle }} className="hover-icon-instagram" onClick={() => window.open('https://www.instagram.com/rjxcsxs')} />
                <IonIcon icon={logoGithub} style={{ ...iconStyle }} className="hover-icon-github" onClick={() => window.open('https://github.com/Mrgumball2004')} />
              </div>
            </IonCardContent>
          </IonCard>

          <div>
          <IonCard className='profile-description'>
            <IonCardHeader>
              <IonCardTitle className="txt-center-profile">About Me</IonCardTitle>
              <IonCardSubtitle>To be edit</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>My works as an artist</IonCardContent>
            <IonButton style={{ display: 'block', margin: '0 auto' }} fill="clear" >Show output</IonButton>
          </IonCard>
          </div>
        </div> 
      </IonContent>
    </IonPage>
  );
};

export default Profile;