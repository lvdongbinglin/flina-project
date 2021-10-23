import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { copyKey, findKey } from '../converters/ObjectConverter';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import { resetPass, getVerfication } from '../request/secureService';
import { withRouter } from 'react-router';
import { path, usefulInfo } from '../App';
import QinglinInput from '../components/Input';
import { withSnackbar } from 'notistack';

const PassFormDetail = {
  username: "用户",
  email: "邮箱",
  code: "验证码",
  password: "密码",
  getCode: "获取",
  login: "登陆",
  submit: "修改",
}

class PassForm extends React.Component<any, any>{

  constructor(props: any) {
    super(props);
    this.state = copyKey(PassFormDetail);
    
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
    console.log(e.target);
    
    // console.log(this.state);
  }

  handleCode(e: any) {
    getVerfication(this.state).then((res: Response)=> 
     res.json()
    ).then(
      res => this.setState({ code: res.content})
    ).catch(e => {
      console.log(e);
      
    })
    console.log(this.state);
  }

  handleSubmit(event: any) {
    // alert('提交的名字: ' + this.state.text);
    resetPass(this.state).then((res: Response)=> 
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
                <QinglinInput fullWidth name={findKey(PassFormDetail, PassFormDetail.username)}  label={PassFormDetail.username} value={this.state.username} placeholder="" onChange={e => this.handleChange(e)}/>
              </div>
              <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
                <QinglinInput fullWidth name={findKey(PassFormDetail, PassFormDetail.email)}  label={PassFormDetail.email} value={this.state.email} placeholder="" onChange={e => this.handleChange(e)}/>
              </div>
              <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
                <QinglinInput fullWidth name={findKey(PassFormDetail, PassFormDetail.code)}  label={PassFormDetail.code} value={this.state.code} placeholder="" onChange={e => this.handleChange(e)}/>
              </div>
              <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
                <QinglinInput fullWidth name={findKey(PassFormDetail, PassFormDetail.password)}  label={PassFormDetail.password} value={this.state.password} placeholder="" onChange={e => this.handleChange(e)} type="password"/>
              </div>
              <div className="crypto-display-flex crypto-display-flex--space-between">
                <div className="mdc-form-field">
                  <a className="mdc-button mdc-button--unelevated big-round-corner-button" onClick={e => this.handleCode(e)}>{PassFormDetail.getCode}</a>
                </div>
                <div className="mdc-form-field">
                  <a className="mdc-button mdc-button--unelevated big-round-corner-button" onClick={e => this.handleSubmit(e)}>{PassFormDetail.submit}</a>
                </div>
                <div className="mdc-form-field">
                  <a onClick={() => this.props.history.push(path.login)} >{PassFormDetail.login}</a>
                </div>
              </div>
            </form>
       
      </>
    );
  }

  
}


export default withRouter(withSnackbar(PassForm) as React.ComponentType<any> );