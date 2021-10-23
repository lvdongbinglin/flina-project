import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react'
import React, { useEffect, useState } from 'react'
import ExploreContainer from '../components/ExploreContainer'
import { getUsermeta } from '../request/userService'
import { keyInfo, map, path, usefulInfo } from '../App'
import { withSnackbar } from 'notistack'
import { useHistory, useLocation, withRouter } from 'react-router'
import RouterTaber from '../components/RouterTaber'
import { useSnackbar } from 'notistack'
import UsermetaForm from '../forms/UsermetaForm'

const UserInfo: React.FC = (props) => {
  const location = useLocation()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const history = useHistory()

  const pageName = '用户信息'
  useEffect(() => {
    if (map.get(keyInfo.userInfo) == null) {
      enqueueSnackbar(usefulInfo.noAuth, usefulInfo.illegalType as any)
      history.push(path.root)
      window.location.reload()
    }
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={usefulInfo.back}></IonBackButton>
          </IonButtons>
          <IonTitle>{pageName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="mdc-typography mdc-theme--background crypro-theme-gradient">
          <div className="crypto-wrapper">
            <div className="crypto-main">
              <div className="crypto-main__content mdc-theme--text-primary-on-background">
                <div className="mdc-layout-grid mdc-layout-grid--demo">
                  <div className="mdc-layout-grid__inner">
                    <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
                      <div className="crypto-widget">
                        <h2 className="crypto-widget__heading mdc-typography--subtitle1 mdc-theme--primary">
                          <span className="crypto-widget__heading-text">
                            {pageName}
                          </span>
                          <span className="crypto-widget__heading-border"></span>
                        </h2>

                        <UsermetaForm></UsermetaForm>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

class Setting extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
    if (map.get(keyInfo.userInfo) == null) {
      this.props.enqueueSnackbar(
        usefulInfo.noAuth,
        usefulInfo.illegalType as any
      )
      this.props.history.push(path.root)
      window.location.reload()
      return
    }
  }

  render() {
    const pageDetail = {
      title: '设置',
      usermeta: '用户信息',
      usermetaPath: path.userInfo,
      logout: '退出登陆',
      logoutPath: path.root,
    }

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{pageDetail.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <div className="mdc-typography mdc-theme--background crypro-theme-gradient">
            <div className="crypto-wrapper">
              <div className="crypto-main">
                <div className="crypto-main__content mdc-theme--text-primary-on-background">
                  <div className="mdc-layout-grid mdc-layout-grid--demo">
                    <div className="mdc-layout-grid__inner">
                      <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
                        <div className="crypto-widget crypto-widget--margin-bottom">
                          <h2 className="crypto-widget__heading mdc-typography--subtitle1 mdc-theme--primary">
                            <span className="crypto-widget__heading-text">
                              {pageDetail.title}
                            </span>
                            <span className="crypto-widget__heading-border"></span>
                          </h2>
                          <RouterTaber
                            tabText={pageDetail.usermeta}
                            tabPath={pageDetail.usermetaPath}
                          />
                          <RouterTaber
                            tabText={pageDetail.logout}
                            tabPath={pageDetail.logoutPath}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    )
  }
}

export default withRouter(withSnackbar(Setting) as React.ComponentType<any>)

export { UserInfo }
