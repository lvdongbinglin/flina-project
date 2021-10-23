import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

import React from 'react'
import { withRouter } from 'react-router'
import { keyInfo, map, path, usefulInfo } from '../App'
import QinglinInput from '../components/Input'
import { copyKey, findKey } from '../converters/ObjectConverter'

import { login, User } from '../request/secureService'
import { withSnackbar, useSnackbar } from 'notistack'
import { Message } from '../beans/Message'

const placeHolder = {
  user: '',
  pass: '',
}

const loginFormDetail = {
  username: '用户',
  password: '密码',
  remember: '记住',
  forget: '忘记密码?',
  passwordInfo: '密码必须超过8位',
  submit: '登陆',
}

class LoginForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = copyKey(loginFormDetail)
  }

  handleChange(e: any) {
    const obj: any = {}
    const name = e.target.name,
      value = e.target.value
    // console.log(name, value);
    if (value === undefined) {
      this.props.enqueueSnackbar(usefulInfo.illegalInfo, usefulInfo.illegalType)
      return
    }
    obj[name] = value
    this.setState(obj)
    // console.log(this.state);
  }

  handleSubmit(event: any) {
    // alert('提交的名字: ' + this.state.text);
    login(this.state)
      .then((res: Response) => res.json())
      .then((res: Message<User>) => {
        if (res.status === usefulInfo.illegalCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.illegalType)
        }
        if (res.status === usefulInfo.successCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.successType)
          map.set(keyInfo.userInfo, res.extra)
          this.props.history.push(path.tab)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  handleEnter(e: any) {
    if (e.key === 'Enter') this.handleSubmit(e)
  }

  render() {
    return (
      <>
        <form className="crypto-login-form">
          <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
            <QinglinInput
              fullWidth
              name={findKey(loginFormDetail, loginFormDetail.username)}
              value={this.state.username}
              placeholder=""
              onChange={(e) => this.handleChange(e)}
              label={loginFormDetail.username}
              required
            />

            <div className="mdc-line-ripple"></div>
          </div>
          <div className="mdc-text-field mdc-text-field--fullwidth ">
            <QinglinInput
              fullWidth
              name={findKey(loginFormDetail, loginFormDetail.password)}
              value={this.state.password}
              placeholder=""
              onChange={(e) => this.handleChange(e)}
              label={loginFormDetail.password}
              required
              type="password"
              onKeyUp={(e) => this.handleEnter(e)}
            />
          </div>
          <p
            className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg crypto-margin-bottom-big"
            id="pw-validation-msg"
          >
            {loginFormDetail.passwordInfo}
          </p>
          <div className="crypto-display-flex crypto-display-flex--space-between crypto-margin-bottom-big">
            <div className="mdc-form-field">
              <div className="mdc-checkbox">
                <input
                  type="checkbox"
                  className="mdc-checkbox__native-control"
                  id="remember-me-checkbox"
                />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path
                      className="mdc-checkbox__checkmark-path"
                      fill="none"
                      stroke="white"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div className="mdc-checkbox__mixedmark"></div>
                </div>
              </div>
              <label>{loginFormDetail.password}</label>
            </div>

            <div className="mdc-form-field">
              <a onClick={() => this.props.history.push(path.pass)}>
                {loginFormDetail.forget}
              </a>
            </div>
          </div>
          <a
            className="mdc-button mdc-button--unelevated big-round-corner-button"
            onClick={(e) => this.handleSubmit(e)}
          >
            {loginFormDetail.submit}
          </a>
        </form>
      </>
    )
  }
}

export default withRouter(withSnackbar(LoginForm) as React.ComponentType<any>)
