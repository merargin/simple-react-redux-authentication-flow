import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export default function recordings(state=initialState, action){
  switch(action.type){
    case actionTypes.FETCH_AUDIO_RECORDINGS:
      return {
        ...state,
        recordingsList: action.payload
      }
    default:
      return state;
  }
}
