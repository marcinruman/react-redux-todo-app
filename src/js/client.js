import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "./Layout";

const app = document.getElementById('app');

ReactDOM.render(<Provider store="">
        <Layout />
    </Provider>, app);