import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useHistory, useLocation, withRouter } from 'react-router'
import { path, usefulInfo } from '../App'
import ExploreContainer from '../components/ExploreContainer'
import SecureTaber, { SecureText } from '../components/SecureTaber'
import ExampleForm from '../forms/Example'
import LoginForm from '../forms/LoginForm'
import { useSnackbar } from 'notistack'
import { withMyMessage, withMyRouter } from '../converters/ComponentDecorator'

const loginPageDetail = {
  create: '创建账号',
  info: '为了使用我们的服务，您必须先',
  login: '登陆',
}
class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="mdc-typography mdc-theme--background crypro-theme-gradient">
        <div className="crypro-login-container">
          <div className="crypro-login-container__box">
            <div className="crypro-login-container__box-inner">
              <h2 className="crypto-widget__heading mdc-typography--subtitle1 mdc-theme--primary">
                <span className="crypto-widget__heading-text">
                  {loginPageDetail.login}
                </span>
                <span className="crypto-widget__heading-border"></span>
              </h2>
              <LoginForm />
            </div>
            <p className="mdc-typography--body2 mdc-theme--on-surface">
              {loginPageDetail.info}
              <a onClick={() => this.props.history.push(path.logup)}>
                {loginPageDetail.create}
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

// export default withRouter(Login)
export default withMyRouter(withMyMessage(Login))
// export default Login
