import { Redirect, Route, useRouteMatch } from 'react-router-dom'
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import {
  planetOutline,
  mailOutline,
  folderOutline,
  optionsOutline,
} from 'ionicons/icons'
import Home from './pages/Home'
import Submit from './pages/Submit'
import Setting, { UserInfo } from './pages/Setting'
import WorksInfo from './pages/Works'
import WorksList from './pages/WorksList'
import { path } from './App'
import React from 'react'

// /* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

// /* Theme variables */
// import './theme/variables.css';
import { userInfo } from 'node:os'

interface IonRoute {
  tab: string //标签文本值
  tabIcon: string //标签图标：Ionic依赖
}

const Tabs: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path={path.home}>
            <Home />
          </Route>
          <Route path={path.submit}>
            <Submit />
          </Route>
          <Route path={path.worksList}>
            <WorksList />
          </Route>
          <Route path={path.worksInfo}>
            <WorksInfo />
          </Route>
          <Route path={path.userInfo}>
            <UserInfo />
          </Route>
          <Route path={path.setting}>
            <Setting />
          </Route>
          <Route exact path={path.tab}>
            <Redirect to={path.home} />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton
            className="mdc-ripple-surface"
            tab="home"
            href={path.home}
          >
            <IonIcon icon={planetOutline} />
            <IonLabel>首页</IonLabel>
          </IonTabButton>
          <IonTabButton
            className="mdc-ripple-surface"
            tab="submit"
            href={path.submit}
          >
            <IonIcon icon={mailOutline} />
            <IonLabel>投稿</IonLabel>
          </IonTabButton>
          <IonTabButton
            className="mdc-ripple-surface"
            tab="works"
            href={path.worksList}
          >
            <IonIcon icon={folderOutline} />
            <IonLabel>作品</IonLabel>
          </IonTabButton>
          <IonTabButton
            className="mdc-ripple-surface"
            tab="setting"
            href={path.setting}
          >
            <IonIcon icon={optionsOutline} />
            <IonLabel>设置</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )
}

export default Tabs
