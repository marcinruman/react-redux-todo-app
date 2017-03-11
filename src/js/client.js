import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "./Layout";
import store from "./store";

store.dispatch({ type: 'ADD_TODO', text: 'Read the Redux docs.', completed: true });

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>
, app);