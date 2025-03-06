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
import { logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

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
            padding: '20px'
          }}
        >
          <IonCard style={{ width: '100%', maxWidth: '500px' }}>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
              <IonCardTitle>John Doe</IonCardTitle>
              <IonCardSubtitle>Software Developer</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Passionate developer with experience in building web and mobile applications.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <IonIcon icon={logoFacebook} style={{ ...iconStyle, color: '#3b5998' }} className="hover-icon" />
                <IonIcon icon={logoInstagram} style={{ ...iconStyle, color: '#E1306C' }} className="hover-icon" />
                <IonIcon icon={logoTwitter} style={{ ...iconStyle, color: '#1DA1F2' }} className="hover-icon" />
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;

// Add the following CSS to your global stylesheet or in a CSS-in-JS solution
/*
.hover-icon:hover {
  color: #000; // Change to desired hover color
}
*/