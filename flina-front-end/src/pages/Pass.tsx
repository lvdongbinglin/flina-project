import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Grid } from '@material-ui/core';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import PassForm from '../forms/PassForm';
import SecureTaber, { SecureText } from '../components/SecureTaber';
import { path, usefulInfo } from '../App';
import { withRouter } from 'react-router';
import { withSnackbar } from 'notistack';

const passPageDetail = {
  pass: "找回密码",
  info: "输入您的邮箱以辅助找回密码",
  
}

class Pass extends React.Component<any, any>{
  
  constructor(props: any) {
    super(props);

   
  }

  render() {
    
    return (
      <div className="mdc-typography mdc-theme--background crypro-theme-gradient">



      <div className="crypro-login-container">
        <div className="crypro-login-container__box">
          <div className="crypro-login-container__box-inner">
            <h2 className="crypto-widget__heading mdc-typography--subtitle1 mdc-theme--primary">
              <span className="crypto-widget__heading-text">{passPageDetail.pass}</span>
              <span className="crypto-widget__heading-border"></span>
            </h2>
            <PassForm />
          </div>
    
          <p className="mdc-typography--body2 mdc-theme--on-surface">
            {passPageDetail.info}
          </p>
        </div>
      </div>
      </div>
    );
  }
};

export default withRouter(withSnackbar(Pass) as React.ComponentType<any> )