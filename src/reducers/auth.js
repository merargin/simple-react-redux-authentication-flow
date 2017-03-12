import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: undefined,
  isAuthenticated: false
};

export default function auth(state=initialState, action){
  switch(action.type){
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };;
    case actionTypes.LOGIN_USER_FAILED:
      return {
        ...state,
        isAuthenticated: false
      };;
    default:
      return state;
  }
}
