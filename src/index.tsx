import ReactDOM from 'react-dom';
import './style/index.css';
// import App from './App';
import Loadable from 'react-loadable';
import ZmsheInitialize from '@src/components/zmshe-initialize'

const LoadableApp = Loadable({
  loader: () => import('./App'),
  loading() {
      return <ZmsheInitialize />
  },
});

ReactDOM.render(
  <LoadableApp />,
  document.getElementById('root')
);
