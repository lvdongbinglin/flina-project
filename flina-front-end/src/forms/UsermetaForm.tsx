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
import {
  resetPass,
  getVerfication,
  User,
  UserLoginRes,
} from '../request/secureService'
import { withRouter } from 'react-router'
import { keyInfo, map, path, usefulInfo } from '../App'
import QinglinInput from '../components/Input'
import { withSnackbar } from 'notistack'
import './SubmitForm.css'
import { getWorks, postWorks } from '../request/worksService'
import { getUsermeta, postUsermeta } from '../request/userService'
import { userInfo } from 'node:os'
import { Message } from '../beans/Message'

const UsermetaFormDetail = {
  id: null,
  userId: null,
  username: '用户',
  email: '邮箱',
  name: '姓名',
  studentId: '学号',
  college: '学院',
  concat: '联系方式',
  submit: '保存',
}

class UsermetaForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = copyKey(UsermetaFormDetail)
  }

  componentDidMount() {
    const userInfo: UserLoginRes = map.get(keyInfo.userInfo)
    if (userInfo == null) {
      this.props.enqueueSnackbar(
        usefulInfo.noAuth,
        usefulInfo.illegalType as any
      )
      this.props.history.push(path.login)
      window.location.reload()
      return
    }
    this.setState({
      userId: userInfo.id,
      username: userInfo.username,
      email: userInfo.email,
    })
    // console.log(userInfo)
    // this.forceUpdate()
    // console.log(this.state)

    this.getUser()
  }

  getUser() {
    const userInfo: UserLoginRes = map.get(keyInfo.userInfo)
    console.log(userInfo)

    getUsermeta(userInfo.id)
      .then((res: Response) => res.json())
      .then((res: Message<any>) => {
        if (res.status === usefulInfo.illegalCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.illegalType as any)
        }
        if (res.status === usefulInfo.successCode) {
          const userObj = res.extra
          // console.log(userObj)
          this.setState({ ...userObj })

          this.setState({
            userId: userInfo.id,
            username: userInfo.username,
            email: userInfo.email,
          })
          // console.log(this.state)
        }
      })
      .catch((e) => {
        console.log(e)
      })
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
    postUsermeta(this.state)
      .then((res: Response) => res.json())
      .then((res) => {
        if (res.status === usefulInfo.illegalCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.illegalType)
        }
        if (res.status === usefulInfo.successCode) {
          this.props.enqueueSnackbar(res.content, usefulInfo.successType)
          this.props.history.push(path.setting)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  handleClear(event: any) {
    this.setState(copyKey(UsermetaFormDetail))
  }

  render() {
    return (
      <>
        <form className="crypto-login-form">
          <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
            <QinglinInput
              disabled
              fullWidth
              name={findKey(UsermetaFormDetail, UsermetaFormDetail.username)}
              label={UsermetaFormDetail.username}
              value={this.state.username}
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
            <QinglinInput
              disabled
              fullWidth
              name={findKey(UsermetaFormDetail, UsermetaFormDetail.email)}
              label={UsermetaFormDetail.email}
              value={this.state.email}
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
            <QinglinInput
              fullWidth
              name={findKey(UsermetaFormDetail, UsermetaFormDetail.name)}
              label={UsermetaFormDetail.name}
              value={this.state.name}
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
            <QinglinInput
              fullWidth
              name={findKey(UsermetaFormDetail, UsermetaFormDetail.studentId)}
              label={UsermetaFormDetail.studentId}
              value={this.state.studentId}
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
            <QinglinInput
              fullWidth
              name={findKey(UsermetaFormDetail, UsermetaFormDetail.college)}
              label={UsermetaFormDetail.college}
              value={this.state.college}
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="mdc-text-field mdc-text-field--fullwidth crypto-margin-bottom-big">
            <QinglinInput
              fullWidth
              name={findKey(UsermetaFormDetail, UsermetaFormDetail.concat)}
              label={UsermetaFormDetail.concat}
              value={this.state.concat}
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div id="submit-block" className="mdc-form-field">
            <a
              id="submit-button"
              className="mdc-button mdc-button--unelevated big-round-corner-button"
              onClick={(e) => this.handleSubmit(e)}
            >
              {UsermetaFormDetail.submit}
            </a>
          </div>
        </form>
      </>
    )
  }
}

export default withRouter(
  withSnackbar(UsermetaForm) as React.ComponentType<any>
)
