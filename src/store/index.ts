import { createStore, Store, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { routerMiddleware } from 'connected-react-router';
import history from './reducers/history';
import { IActionParam } from '@/types/IRedux';

let store = null;
export function getStore() {
  return store as Store<
    any,
    {
      type: string;
      payload?: any;
    }
  >;
}

export default function configureStore(preloadedState?: any): Store<any, IActionParam> {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    rootReducer, // root reducer with router state
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history), // 用于 dispatching history actions,
      ),
    ),
  );

  console.log('process.env.ENV ===', process.env.ENV);
  if (process.env.ENV == 'dev') {
    // eslint-disable-next-line no-underscore-dangle
    (window as any).__store = store;
  }

  return store;
}
