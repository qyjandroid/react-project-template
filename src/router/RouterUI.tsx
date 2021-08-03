import * as React from "react";
import BaseComponent from "@/components/BaseComponent";
import { Route, Switch, withRouter, RouteComponentProps } from "react-router-dom";
import { IRouterPage } from "./IRouterPage";


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
    renderRouter = (routers: IRouterPage[] = [], container: React.ReactNode[] = [], recur?: boolean, parentPath?: string) => {
        routers.map(router => {
            let { path } = router;
            // const { children } = router;
            // if (parentPath) {
            //     path = parentPath + path;
            // }
            // if (recur && children && children.length > 0) {
            //     this.renderRouter(children, container, recur, path);
            // }
            container.push(<Route key={path} path={path} render={(routerProps) => { return this.renderPage(router, routerProps) }} />);
        });
        return container;
    }

    renderPage = (router: IRouterPage, routerProps: RouteComponentProps) => {
        const { component, path, props, name, exact, isDynamic, loadingFallback, ...other } = router;
        const Page = component;
        if (isDynamic) {
            return (
                <React.Suspense fallback={loadingFallback || '正在加载中...'} key={path}>
                    <Page
                        {...routerProps}
                        {...props}
                        {...other}
                    />
                </React.Suspense>
            );
        }
        return (
            <Page
                key={path}
                {...routerProps}
                {...props}
                {...other}
            />
        );
    }



    render() {
        const { routers } = this.props;
        return (
            <Switch>{this.renderRouter(routers, [], true)}</Switch>
        );
    }
}

export default withRouter(RouterUI)