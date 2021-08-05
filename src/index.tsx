import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import App from "@/App";
import { Provider } from "react-redux";
import configureStore from "./store";
import "./index.scss";



const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
