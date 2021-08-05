import { createStore, Store } from "redux";
import rootReducer from "./reducers/index";

let store = null;
export function getStore() {
    return store as Store<any, {
        type: string
        payload?: any
    }>;
}

export default function configureStore(): Store<any, {
    type: string
    payload?: any
}> {
    store = createStore(rootReducer,/* preloadedState, */(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

    console.log("process.env.ENV ===", process.env.ENV);
    if (process.env.ENV == "dev") {
        // eslint-disable-next-line no-underscore-dangle
        (window as any).__store = store;
    }
    return store;
}
