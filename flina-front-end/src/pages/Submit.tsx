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
import React, { useEffect, useState } from 'react'
import { keyInfo, map, path, usefulInfo } from '../App'
import ExploreContainer from '../components/ExploreContainer'
import SubmitForm from '../forms/SubmitForm'
import { useHistory, useLocation, withRouter } from 'react-router'
import { useSnackbar } from 'notistack'

const submitPageDetail = {
  submit: '投稿',
  auth: '实名认证',
  info: '为了使用我们的服务，您必须先进行',
}

const Submit: React.FC = (props: any) => {
  const location = useLocation()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const history = useHistory()
  const worksId = (location as any).worksId

  useEffect(() => {
    if (map.get(keyInfo.userInfo) == null) {
      enqueueSnackbar(usefulInfo.noAuth, usefulInfo.illegalType as any)
      history.push(path.root)
      window.location.reload()
    }
  }, [])

  const pageName = '投稿'
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
                            {submitPageDetail.submit}
                          </span>
                          <span className="crypto-widget__heading-border"></span>
                        </h2>
                        <SubmitForm id={worksId} />
                        <p className="mdc-typography--body2 mdc-theme--on-surface">
                          {submitPageDetail.info}
                          <a onClick={() => props.history.push(path.userInfo)}>
                            {submitPageDetail.auth}
                          </a>
                        </p>
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

export default withRouter(Submit)
