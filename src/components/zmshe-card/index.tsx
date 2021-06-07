
import {useEffect, useRef} from 'react';
import { AppConfigType } from '@src/config/app-config'
import AppStore from '@src/stores/app'
import {toJS} from 'mobx'
import {observer}from 'mobx-react'
import './style.less';
const Index = ({text}: AppConfigType) => {
  const {theme} = AppStore;
  const ref:any = useRef();

  useEffect(() => {
    console.log(toJS(theme), 123123)
    ref.current.style.background = theme.colour?.hint
  }, [theme])

  return (
    <div className="zmshe-card" id="zmshe-card" ref={ref}>
      <div className="zmshe-card-current">
        {text}
      </div>
    </div>
  )
}

export default observer(Index)