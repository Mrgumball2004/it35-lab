import { 
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonPage,
    IonRouterOutlet,
    IonSplitPane,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
    import { Redirect, Route } from "react-router-dom";
    import { IonApp, setupIonicReact } from "@ionic/react";
    import { IonReactRouter } from "@ionic/react-router";
    import Home from "./Home";
    import Profile from "./Profile";
    import About from "./About";
    import { homeOutline, rocketOutline, logOutOutline, personOutline } from 'ionicons/icons';

  const Menu: React.FC = () => {
    const path = [
        { name: "Home", url: "/it35-lab/app/home", icon: homeOutline },
        { name: "About", url: "/it35-lab/app/about", icon: rocketOutline },
        { name: "Profile", url: "/it35-lab/app/Profile", icon:personOutline},
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
            <IonButton
              routerLink="/it35-lab"
              routerDirection="back"
              expand="full">

              <IonIcon icon={logOutOutline} slot="start"></IonIcon>
              <IonIcon icon="logOutline" slot="start"></IonIcon>
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route exact path="/it35-lab/app/home" component={Home} />
          <Route exact path="/it35-lab/app/about" component={About} />
          <Route exact path="/it35-lab/app/Profile" component={Profile} />
          <Route exact path="/it35-lab/app">
            <Redirect to="/it35-lab/app/home" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
        </IonPage>
    );
  };
  
  export default Menu;