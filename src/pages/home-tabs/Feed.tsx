import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';

  import React from 'react';
  import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

  
  const Feed: React.FC = () => {
    return (

      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        <IonCard>
      <IonCardHeader>
        <IonCardTitle>IT35</IonCardTitle>
        <IonCardSubtitle>Application Development & Emerging Tech</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Unit:3</IonCardContent>

      <IonButton fill="clear">Show output</IonButton>
    </IonCard>


    <IonCard>
      <IonCardHeader>
        <IonCardTitle>IT38</IonCardTitle>
        <IonCardSubtitle>Enterprise System</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Unit:3</IonCardContent>

      <IonButton fill="clear">Show output</IonButton>
    </IonCard>


    <IonCard>
      <IonCardHeader>
        <IonCardTitle>IT36</IonCardTitle>
        <IonCardSubtitle>Information Assurance & Security 2</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Unit:3</IonCardContent>

      <IonButton fill="clear">Show output</IonButton>
    </IonCard>


    <IonCard>
      <IonCardHeader>
        <IonCardTitle>IT39</IonCardTitle>
        <IonCardSubtitle>System Integration & Architecture 2</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Unit:3</IonCardContent>

      <IonButton fill="clear">Show output</IonButton>
    </IonCard>


    <IonCard>
      <IonCardHeader>
        <IonCardTitle>IT37</IonCardTitle>
        <IonCardSubtitle>Hardware Implementation Technologies</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Unit:3</IonCardContent>

      <IonButton fill="clear">Show output</IonButton>
    </IonCard>


        </IonContent>
      </IonPage>



    );
  };
  
  export default Feed;