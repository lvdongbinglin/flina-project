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
import { useHistory, useLocation, withRouter } from 'react-router'
import { keyInfo, map, path, usefulInfo } from '../App'
import ExploreContainer from '../components/ExploreContainer'
import {
  deleteTheWorks,
  getWorks,
  getWorksByAuthor,
} from '../request/worksService'
import { useSnackbar } from 'notistack'
import './Works.css'
import { chevronForwardOutline } from 'ionicons/icons'
import { formatTime } from '../converters/TimeConverter'
import { WorksConverter } from '../converters/WorksConverter'
import { withMyMessage, withMyRouter } from '../converters/ComponentDecorator'

class MyWorksList extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      worksList: '',
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

  componentWillReceiveProps(nextProps: any) {
    if (
      nextProps.location.pathname != this.props.location.pathname &&
      nextProps.location.pathname == path.worksList
    ) {
      this.getWorksList()
    }
  }
  componentDidMount() {
    this.getWorksList()
  }

  getWorksList() {
    getWorksByAuthor()
      .then((res: Response) => res.json())
      .then((res) => {
        if (res.status === usefulInfo.illegalCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.illegalType as any)
        }
        if (res.status === usefulInfo.successCode) {
          // enqueueSnackbar(res.content,  usefulInfo.successType as any);
          const worksListItem = this.getWorksListItem(res.extra)
          this.setState({ worksList: worksListItem })
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  getWorks(worksId: number) {
    const param = {
      pathname: path.worksInfo,
      worksId,
    }
    this.props.history.push(param)
    map.set(keyInfo.worksId, worksId)
  }

  getWorksListItem(worksList: any) {
    const result = worksList.map((works: any) => (
      <IonItem onClick={() => this.getWorks(works.id)} key={works.id}>
        <IonLabel className="works">{works.title}</IonLabel>
        <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonItem>
    ))
    return result
  }

  getPageName() {
    const result = '作品列表'
    return result
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{this.getPageName()}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonList id="works-list">{this.state.worksList}</IonList>
        </IonContent>
      </IonPage>
    )
  }
}

export default withMyRouter(withMyMessage(MyWorksList))
