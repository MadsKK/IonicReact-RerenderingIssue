import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from "@ionic/react";

const HomeDetail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton default-href="#"></IonBackButton>
          </IonButtons>
          <IonTitle slot="start">Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        Detail page
      </IonContent>
    </IonPage>
  );
};

export default HomeDetail;



