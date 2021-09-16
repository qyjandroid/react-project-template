import { createHashHistory } from 'history';
import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import { IActionParam } from '@/types/IRedux';

let history = createHashHistory();
export default history;

//import { push } from 'connected-react-router';
//提供了push,go,goBack,replace,block,goForward方法。
//push("/home") || push({pathname:"/home",search:"name=1",hash:"1"})
//history 可以分为两部分，切换和修改，切换历史状态：back,forward,go对应浏览器的后退，跳转，前进。history.go(2);//前进两次

//push 把页面状态保存在state对象中，当页面回来的时候，可以通过event.state获取到state对象。

//查看connected-react-router 的connectRouter 方法，使immer与history 结合使用
export interface HistoryState {
  location: any;
  action: any;
}

const injectQuery = location => {
  if (location && location.query) {
    // Don't inject query if it already exists in history
    return location;
  }

  const searchQuery = location && location.search;

  if (typeof searchQuery !== 'string' || searchQuery.length === 0) {
    return {
      ...location,
      query: {},
    };
  }

  // Ignore the `?` part of the search string e.g. ?username=codejockie
  const search = searchQuery.substring(1);
  // Split the query string on `&` e.g. ?username=codejockie&name=Kennedy
  const queries = search.split('&');
  // Contruct query
  const query = queries.reduce((acc, currentQuery) => {
    // Split on `=`, to get key and value
    const [queryKey, queryValue] = currentQuery.split('=');
    return {
      ...acc,
      [queryKey]: queryValue,
    };
  }, {});

  return {
    ...location,
    query,
  };
};

const initHistoryState: HistoryState = {
  location: injectQuery(history.location),
  action: history.action,
};

/* eslint-disable no-param-reassign  */
export const reducer = produce((draft: HistoryState, actionParam: IActionParam) => {
  if (actionParam.type === LOCATION_CHANGE) {
    const { location, action } = actionParam.payload;
    draft.action = action;
    draft.location = injectQuery(location);
    return draft;
  }
  return draft;
}, initHistoryState);
