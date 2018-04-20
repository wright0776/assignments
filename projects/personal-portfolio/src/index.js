import React from "react";
import ReactDOM from "react-dom";
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import store from './redux';

import App from "./App";

import "./style.css";

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>
,document.getElementById("root"));