import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

/* Set redux data */
import { Provider } from 'react-redux';

import store from './store';
import setAuthToken from './utils/setAuthToken';
import { SET_USER } from './store/actions/types';

// Set user auth token
let token = localStorage.getItem('auth_token');
if (token) {
    setAuthToken(token)
    store.dispatch({
        type: SET_USER,
        payload: token
    })
}


ReactDOM.render(
    <Provider store={store}>
        <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
