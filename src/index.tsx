import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { Provider } from 'react-redux';
import history from '@/store/reducers/history';
import configureStore from '@/store';
import { ConnectedRouter } from 'connected-react-router';
import './index.scss';
import '@/assets/css/index.scss';
import ResolutionCom from '@/components/ResolutionCom/ResolutionComp';
import ErrorBoundary from './components/ErrorBoundary';
import Modal from 'react-modal';

try {
  const store = configureStore({});
  const rootElement = document.getElementById('root');

  Modal.setAppElement(rootElement);

  const renderApp = () => {
    ReactDOM.render(
      <React.StrictMode>
        <ResolutionCom>
          <ErrorBoundary>
            <Provider store={store}>
              <ConnectedRouter history={history}>
                <App />
              </ConnectedRouter>
            </Provider>
          </ErrorBoundary>
        </ResolutionCom>
      </React.StrictMode>,
      document.getElementById('root'),
    );
  };
  renderApp();
} catch (e) {
  console.log('e');
}
