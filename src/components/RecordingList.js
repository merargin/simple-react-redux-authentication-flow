import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect }  from 'react-redux';
import { getToken } from '../localStorage';
import { browserHistory } from 'react-router';
import Rating from './Rating';
import CreatedTime from './CreatedTime';
import Duration from './Duration';
import FinalScript from './FinalScript';
import Audio from './Audio';


class RecordingList extends Component {
  componentWillMount(){
    if(getToken() === null){
      browserHistory.push('/');
    } else {
      const { getRecordings } = this.props;
      getRecordings();
    }
  }
  render(){
    const { logoutUser, recordings } = this.props;
    const recordsList = this.props.recordings ? this.props.recordings.recordsList : [];
    return (
      <div className="records">
        <button className="btn btn-def logout-button" onClick={logoutUser}>Logout</button>
        <div className="records-container">
        {
          recordsList ? recordsList.map(function(record, key){
            return(
              <div className="record-list" key={record.created}>
                <FinalScript fscript={record.final_script} />
                <Rating rating={record.rating} />
                <Duration duration={record.duration} />
                <Audio url={record.url} />
                <CreatedTime createdAt={record.created} />
              </div>
            )
          }) : null
        }
        </div>
      </div>
    )
  }
}

export default RecordingList;
