import axios from 'axios';
import * as actionTypes from './actionTypes';
import { getToken, setToken, removeToken } from '../localStorage';
import api from '../api';
import { browserHistory } from 'react-router';

function getList(recordsList){
  return {
    type: actionTypes.FETCH_AUDIO_RECORDINGS,
    payload :{
      recordsList
    }
  }
}

export function logoutUser(){
    return function (dispatch) {
        dispatch({ type: actionTypes.USER_NO_AUTHENTICATION });
        removeToken();
        browserHistory.push('/');
    }
}

export function loginUserSuccess(payload){
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload
  };
}

function authenticationFailed(message){
    return {
        type: actionTypes.LOGIN_USER_FAILED,
        payload: {
            message
        }
    }
}

export function loginUser({ email, password, dispatch }) {
    return function(dispatch){
        if(email === undefined || password === undefined){
            dispatch(authenticationFailed('Invalid Email or Password.'));
        }
        api.login(email, password).then(response => {
            setToken(response.data.token);
            dispatch(loginUserSuccess({
                email,
                password
            }));
            browserHistory.push('/home');
        }).catch((error) => dispatch(onError(error.response || error)));
    }
};

export function getRecordings(dispatch){
    return function(dispatch){
        const token = getToken();
        if(token !== null){
            api.getRecordings(token).then(response => {
                return response.data;
            }).then(data => {
                dispatch(getList(data.results));
            });
        };
    };
};

export const onError = (response) => {
  return {
    type: actionTypes.LOGIN_USER_FAILED,
    payload: getErrorMessage(response)
  };
}

const getErrorMessage = (response) => {
  let errorMessage;
  if (response.data) {
    errorMessage = response.data;
  }
  else {
    errorMessage = response;
  }
  return errorMessage;
}

