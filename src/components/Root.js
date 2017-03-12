import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import LoginPage from './LoginPage';
import UserHome from '../containers/UserHome';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configureStore';

let store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
    <Provider store={store} >
        <Router history={browserHistory} >
            <Route path="/" component={LoginPage} />
            <Route path="/home" component={UserHome} />
        </Router>
    </Provider>
);

export default Root;
