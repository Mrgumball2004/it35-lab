import { 
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar, 
      useIonRouter
  } from '@ionic/react';
  
  import { IonInput, IonItem, IonList } from '@ionic/react';
  import { IonInput, IonInputPasswordToggle } from '@ionic/react';
  const Login: React.FC = () => {
    const navigation = useIonRouter();
    const doLogin = () => {
        navigation.push('/it35-lab/app','forward','replace');
        
    }

    function Example() {
      const [inputModel, setInputModel] = useState('');
      const ionInputEl = useRef<HTMLIonInputElement>(null);
    
      const onInput = (event: Event) => {
        const value = (event.target as HTMLIonInputElement).value as string;
    
        // Removes non alphanumeric characters
        const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');
    
        /**
         * Update both the state variable and
         * the component to keep them in sync.
         */
        setInputModel(filteredValue);
    
        const inputCmp = ionInputEl.current;
        if (inputCmp !== null) {
          inputCmp.value = filteredValue;
        }
      }

    
    return (


      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

       <IonContent className='ion-padding'>
          <IonButton onClick={() => doLogin()} expand="full">
              Login
          </IonButton>

          <IonInput type="password" label="Password" value="NeverGonnaGiveYouUp">
      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
    </IonInput>

    <IonList>
      <IonItem>
        <IonInput label="Alphanumeric Characters" value={inputModel} onIonInput={onInput} ref={ionInputEl}></IonInput>
      </IonItem>
    </IonList>

      </IonContent>
    </IonPage>
    );
  };
  
  export default Login;