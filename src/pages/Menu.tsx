import { 
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonMenu,
    IonMenuToggle,
    IonPage,
    IonRouterOutlet,
    IonSplitPane,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
    import { Redirect, Route } from "react-router";
    import { homeOutline, logOutOutline, rocketOutline, settingsOutline } from "ionicons/icons";
    import Home from "./Home";
    import About from "./About";
    import Profile from "./Profile";
    import { supabase } from '../utils/supabaseClient';
    import { useState } from 'react';

  const Menu: React.FC = () => {
    const path = [
        { name: "Home", url: "/it35-lab/app/home", icon: homeOutline},
        { name: "About", url: "/it35-lab/app/about", icon: rocketOutline },
        { name: "Profile", url: "/it35-lab/app/profile", icon: settingsOutline },
        
      ];

    return (
      
      
      <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent fullscreen>
            {path.map((item, index) => (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="forward">
                  <IonIcon icon={item.icon} slot="start"></IonIcon>
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}

              <IonButton color="success" routerLink="/it35-lab" routerDirection="back" expand="full">

              <IonIcon icon={logOutOutline} slot="start"></IonIcon>
              <IonIcon icon="logOutline" slot="start"></IonIcon>
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path="/it35-lab/app/home" component={Home} />
          <Route exact path="/it35-lab/app/about" component={About} />
          <Route exact path="/it35-lab/app/profile" component={Profile} />
          <Route exact path="/it35-lab/app">
           <Redirect to="/it35-lab/app/home" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
        </IonPage>
    );
  };
  
  export default Menu;

function setShowToast(arg0: boolean) {
  throw new Error("Function not implemented.");
}
function setErrorMessage(message: string) {
  throw new Error("Function not implemented.");
}

function setShowAlert(arg0: boolean) {
  throw new Error("Function not implemented.");
}

