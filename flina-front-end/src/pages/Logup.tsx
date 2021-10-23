import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Grid } from '@material-ui/core';
import React from 'react';
import { path, usefulInfo } from '../App';
import ExploreContainer from '../components/ExploreContainer';
import SecureTaber, { SecureText } from '../components/SecureTaber';
import LogupForm from '../forms/LogupForm';
import { withRouter } from 'react-router';
import { withSnackbar } from 'notistack';

const logupPageDetail = {
  already: "已有账号？",
  logup: "注册",
  login: "立即登陆",

}
class Logup extends React.Component<any, any>{

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
              <span className="crypto-widget__heading-text">{logupPageDetail.logup}</span>
              <span className="crypto-widget__heading-border"></span>
            </h2>
            <LogupForm />
          </div>
          <p className="mdc-typography--body2 mdc-theme--on-surface">{logupPageDetail.already} 
          <a onClick={() => this.props.history.push(path.login)}>{logupPageDetail.login}</a>
          </p>
        </div>
      </div>
      </div>
    );
  }
};


export default withRouter(withSnackbar(Logup) as React.ComponentType<any> );