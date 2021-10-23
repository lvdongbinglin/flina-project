import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { SnackbarProvider } from 'notistack'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

import Tabs from './Tabs'
import Login from './pages/Login'
import Logup from './pages/Logup'
import Pass from './pages/Pass'

export const usefulInfo = {
  back: '返回',
  // domain: 'http://www.dongqinglin.cn/flina/1.0',
  domain: 'http://localhost:8080/flina/1.0',
  DES_PROPERTY: 'password',
  successCode: 200,
  successType: { variant: 'success' },
  infoType: { variant: 'info' },
  illegalCode: 400,
  illegalType: { variant: 'warning' },
  illegalInfo: '不允许空值',
  noAuth: '您没有相关权限',
  centerClassName: 'container',
  timerMs: 5000,
  userInfo: null,
  activity: null,
}

export const messageInfo = {
  illegalInfo: '不允许空值',
  noAuth: '您没有相关权限',
}

export const keyInfo = {
  userInfo: 'userInfo',
  activityId: 'activityId',
  jwt: 'jwt',
  worksId: 'worksId',
}

export const map: Map<string, any> = new Map()

export const path = {
  root: '/',
  login: '/login',
  logup: '/logup',
  pass: '/pass',
  tab: '/tab',
  home: '/tab/home',
  submit: '/tab/submit',
  worksList: '/tab/works',
  worksInfo: '/tab/worksInfo',
  setting: '/tab/setting',
  userInfo: '/tab/userInfo',
}

const App: React.FC = () => (
  <SnackbarProvider
    maxSnack={3}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    autoHideDuration={2000}
  >
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet></IonRouterOutlet>
        <Route exact path={path.login}>
          <Login />
        </Route>
        <Route exact path={path.logup}>
          <Logup />
        </Route>
        <Route exact path={path.pass}>
          <Pass />
        </Route>
        <Route path={path.tab}>
          <Tabs />
        </Route>
        <Route exact path={path.root}>
          <Redirect to={path.login} />
        </Route>
      </IonReactRouter>
    </IonApp>
  </SnackbarProvider>
)

export default App
