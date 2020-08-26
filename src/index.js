import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
//is it needed?

import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {rerenderAllTree} from "./render";




rerenderAllTree()




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
