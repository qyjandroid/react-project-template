import { combineReducers } from "redux";
import user from "./user";
import history from "./history";
import { connectRouter } from 'connected-react-router';



export default combineReducers({
    router: connectRouter(history),//必须是router
    user
});
