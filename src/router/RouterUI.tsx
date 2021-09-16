import * as React from 'react';
import BaseComponent from '@/components/BaseComponent';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { IRouterPage } from '@/types/IRouterPage';
import NoMatch from '@/components/NoMatch';

interface IRouterUIProps {
  routers: IRouterPage[];
}

type IProps = IRouterUIProps & RouteComponentProps;

/**
 *
 * 渲染路由
 * @class RouterUI
 * @extends {BaseComponent<IProps>}
 */
class RouterUI extends BaseComponent<IProps> {
  /**
   * 生成router
   * @param {*} routers
   * @param {*} container
   * @param {*} recur 是否递归
   */
  renderRouter = (routers: IRouterPage[] = []) =>
    routers.map(router => {
      let { path, exact } = router;
      return (
        <Route
          key={path}
          path={path}
          exact={exact ? true : false}
          render={() => this.renderPage(router)}
        />
      );
    });

  renderPage = (router: IRouterPage) => {
    const { component, path, loadingFallback } = router;
    const Page = component;
    return (
      <React.Suspense fallback={loadingFallback || '正在加载中...'} key={path}>
        <Page />
      </React.Suspense>
    );
  };

  render() {
    const { routers } = this.props;
    return (
      <Switch>
        {this.renderRouter(routers)}
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default withRouter(RouterUI);
