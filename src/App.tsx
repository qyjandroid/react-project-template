import React from 'react';
import routerConfig from './router/index';
import RouterUI from '@/router/RouterUI';
import AppContext from './common/AppContext';
import { IAppContext } from '@/types/IContext';

document.title = 'React App';

class App extends React.Component {
  private a = 2;

  getLiveContextValue = (): IAppContext => ({
    token: '123',
    uid: 1233,
    test: this.test,
  });

  test = () => {
    console.log('aa=2=', this.a);
  };

  render() {
    console.log('abc331');
    return (
      <>
        <AppContext.Provider value={this.getLiveContextValue()}>
          <RouterUI routers={routerConfig.routes} />
        </AppContext.Provider>
      </>
    );
  }
}

export default App;
