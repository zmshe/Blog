import { appConfig, AppConfigType }  from '@src/config/app-config';
import ZmsheCard from '@src/components/zmshe-card'
import './style/App.less';

function App() {
  return (
    <div className="zmshe">
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
