import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "./Layout";
import store from "./store";

store.dispatch({ type: 'ADD_TODO', text: 'This is task 1', completed: true });

store.dispatch({ type: 'ADD_TODO', text: 'This is task 2', completed: true });

store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' });

store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' });

store.dispatch({ type: 'ADD_TODO', text: 'This is task 3', completed: false });

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>
, app);