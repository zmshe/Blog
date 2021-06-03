import React from 'react';
import { appConfig, AppConfigType } from '@src/config/app-config';
import Header from '@src/components/header'
import ZmsheCard from '@src/components/zmshe-card'
import './style/App.less';
const App = () => {
  return (
    <div className="zmshe">
      <Header />
       <div className="zmshe-content">
        {
          appConfig.map((item:AppConfigType) => (
            <ZmsheCard
              key={item.id}
              text={item.text}
              path={item.path}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
