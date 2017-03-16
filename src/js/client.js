import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "./Layout";
import store from "./store";

store.dispatch({ type: 'ADD_TODO', text: 'Buy eggs', completed: true });

store.dispatch({ type: 'ADD_TODO', text: 'Buy milk', completed: true });

store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' });

store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' });

store.dispatch({ type: 'ADD_TODO', text: 'Buy water', completed: false });

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>
, app);