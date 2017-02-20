import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const reducer = (state={}, action) => {
    return state;
};

const middleware = applyMiddleware(logger());
const store = createStore(reducer, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
});


store.dispatch({type: "FOO"});


