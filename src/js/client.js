import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "./Layout";
import store from "./store";

store.dispatch({ type: 'ADD_TODO', text: 'Buy eggs', completed: false });

store.dispatch({ type: 'ADD_TODO', text: 'Buy milk', completed: true });

store.dispatch({ type: 'ADD_TODO', text: 'Buy water', completed: false });

store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ACTIVE' });

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>
, app);