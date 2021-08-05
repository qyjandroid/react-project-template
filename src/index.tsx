import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import { Provider } from "react-redux";
import history from "@/store/reducers/history";
import configureStore from "@/store";
import { ConnectedRouter } from 'connected-react-router';
import "./index.scss";

try {
    const store = configureStore({});
    const renderApp = () => {
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <App />
                    </ConnectedRouter>
                </Provider>
            </React.StrictMode>,
            document.getElementById('root')
        )
    }

    renderApp();
} catch (e) {
    console.log("e");
}



