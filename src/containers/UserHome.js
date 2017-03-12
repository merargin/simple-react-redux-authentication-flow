import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecordings, logoutUser } from '../actions/actionCreators';
import RecordingList from '../components/RecordingList';
import { bindActionCreators } from 'redux';

function mapStateToPops(state){
   return{
      recordings: state.recordings.recordingsList
   }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({
      getRecordings,
      logoutUser
   }, dispatch);
}

export default connect(mapStateToPops, mapDispatchToProps)(RecordingList);
