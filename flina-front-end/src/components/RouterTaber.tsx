import './RouterTaber.css'
import { IonIcon } from '@ionic/react'
import { chevronForwardOutline } from 'ionicons/icons'
import { withRouter } from 'react-router'
import { path } from '../App'

interface RouterTaberProps {
  tabText: string
  tabPath: string
}

const RouterTaber: React.FC<any> = (props: any) => {
  const push = (tabPath: string) => {
    props.history.push(tabPath)
    if (tabPath === path.root) window.location.reload()
  }

  return (
    <div className="crypto-border-list crypto-widget__content crypto-widget">
      <a
        onClick={() => push(props.tabPath)}
        className="crypto-border-list__item"
      >
        <span className="mdc-typography--overline crypto-border-list__text mdc-theme--text-primary-on-background">
          {props.tabText}
        </span>

        <span className="crypto-border-list__action">
          <IonIcon icon={chevronForwardOutline}></IonIcon>
        </span>
        <span className="crypto-border-list__border mdc-theme--primary-bg"></span>
        <span className="crypto-border-list__border-hover mdc-theme--secondary-bg"></span>
      </a>
    </div>
  )
}

export default withRouter(RouterTaber)
