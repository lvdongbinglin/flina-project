import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { findKey } from '../converters/ObjectConverter';
import { getHtml } from '../request/example';

const exampleFormDetail = {
  title: "标题",
  content: "内容"
}

export default class ExampleForm extends React.Component<any, any>{

  constructor(props: any) {
    super(props);
    this.state = {...exampleFormDetail};
    
  }

  handleChange(e: any) {
    this.setState({[e.target.name] : e.target.value});
    console.log(this.state);
  }

  handleSubmit(event: any) {
    // alert('提交的名字: ' + this.state.text);
    getHtml().then((res: Response)=> 
      res.text()
    ).then(
      text => console.log(text)
    ).catch(e => {
      console.log(e);
      
    })
  }


  render() {
    return (
      <form>
        <IonList>
          <IonItem>
              <IonLabel position="floating">{exampleFormDetail.title}</IonLabel>
              <IonInput name={findKey(exampleFormDetail, exampleFormDetail.title)} value={this.state.title} placeholder="" onIonChange={e => this.handleChange(e)} clearInput></IonInput>
            </IonItem>
          <IonItem>
          <IonLabel position="floating">{exampleFormDetail.content}</IonLabel>
              <IonInput name={findKey(exampleFormDetail, exampleFormDetail.content)} value={this.state.content} placeholder="" onIonChange={e => this.handleChange(e)} clearInput></IonInput>
          </IonItem>
        </IonList>
        <IonButton expand="block" onClick={e => this.handleSubmit(e)}>投稿</IonButton>
      </form>
    );
  }

  
}


