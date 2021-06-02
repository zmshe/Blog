import React from 'react';
import { AppConfigType } from '@src/config/app-config'
import './style.less';
const Index = ({text}: AppConfigType) => {
  return (
    <div className="zmshe-card" >
      <div className="zmshe-card-current" />
      {text}
    </div>
  )
}

export default Index