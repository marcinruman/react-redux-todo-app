import { applyMiddleware, createStore } from "redux";

const reducer = (initialState=0, action) => {
    switch(action.type) {
        case "INC": {
            initialState = initialState + 1;
            break;
        }
        case "DEC": {
            initialState = initialState - 1;
            break;
        }
        case "E": {
            throw new Error("AAAA!!!!!");
            break;
        }
    }
    return initialState;
};

const logger = (store) => (next) => (action) => {
    console.log("action fired!", action);
    next(action);
};

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e) {
        console.log("AHHHHH!", e);
    }

};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
});



store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "E"});

