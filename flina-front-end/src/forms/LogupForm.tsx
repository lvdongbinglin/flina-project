import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {  TextField } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router';
import { path, usefulInfo } from '../App';
import QinglinInput from '../components/Input';
import { copyKey, findKey } from '../converters/ObjectConverter';
import { getHtml } from '../request/example';
import { logup } from '../request/secureService';
import { withSnackbar, useSnackbar } from 'notistack';

const logupFormDetail = {
  username: "用户",
  password: "密码",
  confirm: "确认密码",
  email: "邮箱",
  passwordInfo: "密码必须超过8位",
  agree: "我同意",
  agreement: "用户协议",
  submit: "注册",
}



class LogupForm extends React.Component<any, any>{

  constructor(props: any) {
    super(props);
    this.state = copyKey(logupFormDetail);
    
    
  }

  handleChange(e: any) {
    const obj: any = {};
    const name = e.target.name, value =  e.target.value;
    // console.log(name, value);
    if(value === undefined) {
      this.props.enqueueSnackbar(usefulInfo.illegalInfo,  usefulInfo.illegalType)
      return
    };
    obj[name] = value;
    this.setState(obj)
    // console.log(this.state);
  }


  handleSubmit(event: any) {
    // alert('提交的名字: ' + this.state.text);
    logup(this.state).then((res: Response)=> 
      res.json()
    ).then(
      res => {
        if(res.status === usefulInfo.illegalCode){
          
          this.props.enqueueSnackbar(res.content,  usefulInfo.illegalType)
          
        }
        if(res.status === usefulInfo.successCode){
          this.props.enqueueSnackbar(res.content,  usefulInfo.successType)
          this.props.history.push(path.login)
        }
      }
    ).catch(e => {
      console.log(e);

    })
  }


  render() {
    return (
      <>
            <form className="crypto-login-form">
              <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
              <QinglinInput fullWidth name={findKey(logupFormDetail, logupFormDetail.username)}  label={logupFormDetail.username} value={this.state.username} placeholder="" onChange={e => this.handleChange(e)} type="text"/>
              
              </div>
              <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
                <QinglinInput fullWidth name={findKey(logupFormDetail, logupFormDetail.email)} label={logupFormDetail.email}  value={this.state.email} placeholder="" onChange={e => this.handleChange(e)} type="text"/>
                
              </div>
              <div className="mdc-text-field mdc-text-field--fullwidth ">
              <QinglinInput fullWidth name={findKey(logupFormDetail, logupFormDetail.password)} label={logupFormDetail.password}  value={this.state.password} placeholder="" onChange={e => this.handleChange(e)} required type="password"/>
                
              </div>
              <p className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg crypto-margin-bottom-big"
                id="pw-validation-msg">
               {logupFormDetail.passwordInfo}
              </p>
              <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">

              <QinglinInput fullWidth name={findKey(logupFormDetail, logupFormDetail.confirm)} label={logupFormDetail.confirm} value={this.state.confirm} placeholder="" onChange={e => this.handleChange(e)} required  id="confirm-pw" type="password"/>
                
              </div>
              <div className="crypto-display-flex crypto-display-flex--space-between crypto-margin-bottom-big">
                <div className="mdc-form-field">
                  <div className="mdc-checkbox">
                    <input type="checkbox" className="mdc-checkbox__native-control" id="terms-checkbox" />
                    <div className="mdc-checkbox__background">
                      <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                        <path className="mdc-checkbox__checkmark-path" fill="none" stroke="white"
                          d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                      </svg>
                      <div className="mdc-checkbox__mixedmark"></div>
                    </div>
                  </div>
                  <label>{logupFormDetail.agree}<a href="#">{logupFormDetail.agreement}</a></label>
                </div>
              </div>
              <a className="mdc-button mdc-button--unelevated big-round-corner-button" onClick={e => this.handleSubmit(e)}>{logupFormDetail.submit}</a>
            </form>
      
      </>
    );
  }

  
}





export default withRouter(withSnackbar(LogupForm) as React.ComponentType<any> ); 