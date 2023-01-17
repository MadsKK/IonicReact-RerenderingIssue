import { IonCard, IonCardHeader, IonCardTitle, IonItem } from "@ionic/react";

const HomeCard: React.FC = () => {
  return (
    <>
      {/* <a onClick={handleClick}>fdsfdsf</a> */}
      <IonItem routerLink="/home/detail" className='ion-no-margin' button> 
        Some Item
      </IonItem>
    </>
  );
};

export default HomeCard;
