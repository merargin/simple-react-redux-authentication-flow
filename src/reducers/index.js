import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import * as actionTypes from '../actions/actionTypes';
import auth from './auth';
import recordings from './recordings';

const rootReducer = combineReducers({
   auth,
   recordings,
   routing
});

export default rootReducer
