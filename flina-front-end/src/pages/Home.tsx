import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'
import { keyInfo, map, path, usefulInfo } from '../App'
import { withRouter } from 'react-router'
import { Activity, getActivity } from '../request/activityService'
import { withSnackbar } from 'notistack'
import './Home.css'
import { Message } from '../beans/Message'
import { formatDay, formatTime } from '../converters/TimeConverter'

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      activityName: '',
      startTime: '',
      endTime: '',
      submit: '立即投稿',
    }
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
  componentDidMount() {
    this.init()
  }
  init() {
    getActivity()
      .then((res: Response) => res.json())
      .then((res: Message<Activity[]>) => {
        if (res.status === usefulInfo.illegalCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.illegalType)
        }
        if (res.status === usefulInfo.successCode) {
          const length = res.extra.length
          const activity: Activity = res.extra[length - 1]
          map.set(keyInfo.activityId, activity.id)

          this.setState({
            activityName: activity.title,
            startTime: formatDay(activity.startTime),
            endTime: formatDay(activity.endTime),
          })
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
  render() {
    const pageName = '主页'
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
                        <div className="crypto-widget container">
                          <h2
                            id="activity-title"
                            className="crypto-widget__heading mdc-typography--subtitle1 mdc-theme--primary"
                          >
                            <span className="crypto-widget__heading-border"></span>
                            <span className="crypto-widget__heading-text">
                              {this.state.activityName}
                            </span>
                            <span className="crypto-widget__heading-border"></span>
                          </h2>
                          <p className="mdc-typography--body2 mdc-theme--on-surface">
                            {this.state.startTime}-{this.state.endTime}
                          </p>
                          <p className="mdc-typography--body2 mdc-theme--on-surface">
                            <a
                              className="mdc-button mdc-button--unelevated big-round-corner-button"
                              onClick={() =>
                                this.props.history.push(path.submit)
                              }
                            >
                              {this.state.submit}
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
}

export default withRouter(withSnackbar(Home) as React.ComponentType<any>)
