import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'
import { copyKey, findKey } from '../converters/ObjectConverter'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core'
import { resetPass, getVerfication } from '../request/secureService'
import { withRouter } from 'react-router'
import { path, usefulInfo } from '../App'
import QinglinInput from '../components/Input'
import { withSnackbar } from 'notistack'
import './SubmitForm.css'
import { getWorks, postWorks } from '../request/worksService'

const SubmitFormDetail = {
  id: null,
  title: '标题',
  style: '体裁',
  content: '内容',
  submit: '投稿',
  cancel: '清空',
}

class SubmitForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = copyKey(SubmitFormDetail)
  }
  componentDidMount() {
    this.init()
  }
  init() {
    if (this.props.id == null || this.props.id == undefined) return
    getWorks(this.props.id)
      .then((res: Response) => res.json())
      .then((res) => {
        if (res.status === usefulInfo.illegalCode) {
          // this.props.enqueueSnackbar(res.content, usefulInfo.illegalType as any)
        }
        if (res.status === usefulInfo.successCode) {
          // this.props.enqueueSnackbar(res.content,  usefulInfo.successType as any);
          // console.log(res.extra)
          this.setState({ ...res.extra })

          // console.log(this.state)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  componentWillReceiveProps(nextProps: any) {
    if (
      nextProps.location.pathname != this.props.location.pathname &&
      nextProps.location.pathname == path.submit
    ) {
      this.init()
    }
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
    // console.log(e.target);

    // console.log(this.state);
  }

  handleSubmit(event: any) {
    // alert('提交的名字: ' + this.state.text);
    // console.log(this.state)

    postWorks(this.state)
      .then((res: Response) => res.json())
      .then((res) => {
        if (res.status === usefulInfo.illegalCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.illegalType)
        }
        if (res.status === usefulInfo.successCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.successType)
          this.props.history.push(path.worksList)
          this.handleClear(null)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  handleClear(event: any) {
    this.setState(copyKey(SubmitFormDetail))
  }

  render() {
    return (
      <>
        <form className="crypto-login-form">
          <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
            <QinglinInput
              fullWidth
              name={findKey(SubmitFormDetail, SubmitFormDetail.title)}
              label={SubmitFormDetail.title}
              value={this.state.title}
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <IonItem>
            <IonLabel>体裁</IonLabel>
            <IonSelect
              name={findKey(SubmitFormDetail, SubmitFormDetail.style)}
              value={this.state.style}
              onIonChange={(e) => this.handleChange(e)}
              okText="确定"
              cancelText="取消"
            >
              <IonSelectOption value="ancient">古典诗词</IonSelectOption>
              <IonSelectOption value="modern">现代诗</IonSelectOption>
              <IonSelectOption value="article">文章</IonSelectOption>
              <IonSelectOption value="special">
                其他（特色征稿）
              </IonSelectOption>
            </IonSelect>
          </IonItem>

          <div className="qinglin-textarea">
            <QinglinInput
              variant="outlined"
              multiline
              rows={15}
              fullWidth
              name={findKey(SubmitFormDetail, SubmitFormDetail.content)}
              label={SubmitFormDetail.content}
              value={this.state.content}
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div id="submit-block" className="mdc-form-field">
            <a
              id="submit-button"
              className="mdc-button mdc-button--unelevated big-round-corner-button"
              onClick={(e) => this.handleClear(e)}
            >
              {SubmitFormDetail.cancel}
            </a>
          </div>
          <div id="submit-block" className="mdc-form-field">
            <a
              id="submit-button"
              className="mdc-button mdc-button--unelevated big-round-corner-button"
              onClick={(e) => this.handleSubmit(e)}
            >
              {SubmitFormDetail.submit}
            </a>
          </div>
        </form>
      </>
    )
  }
}

export default withRouter(withSnackbar(SubmitForm) as React.ComponentType<any>)
