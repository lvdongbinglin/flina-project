import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';




export default class Example extends React.Component{


  render() {
    const pageName = "示例"
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{pageName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{pageName}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name={pageName} />
        </IonContent>
      </IonPage>
    );
  }
};