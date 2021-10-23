import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonFabButton,
  IonFab,
} from '@ionic/react'
import React, { useEffect, useState } from 'react'

import { keyInfo, map, path, usefulInfo } from '../App'
import { deleteTheWorks, getWorks } from '../request/worksService'
import './Works.css'
import { formatTime } from '../converters/TimeConverter'
import { WorksConverter } from '../converters/WorksConverter'
import { withMyMessage, withMyRouter } from '../converters/ComponentDecorator'

class Works extends React.Component<any, any> {
  timer: any
  constructor(props: any) {
    super(props)
    this.state = {
      works: '',
      fabs: '',
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
    this.getWorks()
    this.timer = setInterval(() => {
      this.getWorks()
    }, usefulInfo.timerMs)
    // this.test()
  }
  // test() {
  //   for (let index = 0; index < 32; index++) {
  //     setInterval(() => {
  //       this.getWorks()
  //     }, usefulInfo.timerMs)
  //   }
  // }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentWillReceiveProps(nextProps: any) {
    if (
      nextProps.location.pathname != this.props.location.pathname &&
      nextProps.location.pathname == path.worksInfo
    ) {
      this.componentWillUnmount()
    }
  }

  getPageName() {
    const pageName = '作品'
    return pageName
  }

  getWorksId() {
    return map.get(keyInfo.worksId)
  }

  editWorks() {
    // this.props.history.push(path.worksList)
    const param = {
      pathname: path.submit,
      worksId: this.getWorksId(),
    }
    this.props.history.push(param)
  }

  deleteWorks() {
    deleteTheWorks(this.getWorksId())
      .then((res: Response) => res.json())
      .then((res) => {
        if (res.status === usefulInfo.illegalCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.illegalType as any)
        }
        if (res.status === usefulInfo.successCode) {
          // enqueueSnackbar(res.content,  usefulInfo.successType as any);
          this.props.history.push(path.worksList)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  getWorks() {
    const worksId = this.getWorksId()
    console.log('获取')

    getWorks(worksId)
      .then((res: Response) => res.json())
      .then((res) => {
        if (res.status === usefulInfo.illegalCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.illegalType as any)
        }
        if (res.status === usefulInfo.successCode) {
          // enqueueSnackbar(res.content,  usefulInfo.successType as any);
          const worksObj: any = res.extra
          const worksItem: any = this.getWorksItem(worksObj)
          this.setState({ works: worksItem })
          // worksObj.enable = false;
          if (worksObj.enable) {
            const fabItem: any = this.getFabItem()
            this.setState({ fabs: fabItem })
          } else {
            const fabItem: any = null
            this.setState({ fabs: fabItem })
          }
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  getFabItem() {
    return (
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={() => this.editWorks()}>
          <i className="fas fa-pen-nib"></i>
        </IonFabButton>
        <IonFabButton onClick={() => this.deleteWorks()}>
          <i className="fas fa-trash-alt"></i>
        </IonFabButton>
      </IonFab>
    )
  }
  getWorksItem(worksObj: any): any {
    return (
      <div className="poetry-block">
        <div className="poetry-info">
          <h2 className="poetry-title">{worksObj.title}</h2>

          <p className="poetry-status">
            <span className="poetry-time">{formatTime(worksObj.upTime)}</span>

            <span>{WorksConverter.translateStyle(worksObj.style)}</span>
            <span>{worksObj.enable ? '可修改' : '不可修改'}</span>
          </p>
        </div>

        <div id="poetry-content">{worksObj.content}</div>
      </div>
    )
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text={usefulInfo.back}></IonBackButton>
            </IonButtons>
            <IonTitle>{this.getPageName()}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          {this.state.works}
          {this.state.fabs}
        </IonContent>
      </IonPage>
    )
  }
}

export default withMyRouter(withMyMessage(Works))
