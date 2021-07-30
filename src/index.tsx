import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from 'react-router-dom';
import routerConfig from "./router/index";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Switch>
                {
                    routerConfig.routes.map((route) => {
                        return (
                            <Route key={route.path} {...route} />
                        )
                    })
                }
            </Switch>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
