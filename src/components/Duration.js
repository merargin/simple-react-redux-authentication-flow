import React from 'react';

const getReadableDuration = (duration) => {
    const min = 60;
    const hour = min * 60;
    var readableDuration = '';

    if(duration/hour >= 1){
        readableDuration += Math.floor(duration/hour)+':';
        duration = duration % hour;
    }
    if(duration/min >= 1){
        readableDuration += Math.floor(duration/min)+':';
        duration = duration % min;
    }
    readableDuration += duration;
    return readableDuration;
};

const Duration = ({ duration }) => {
    return (
        <div className="duration">Duration - { getReadableDuration(duration) }</div>
    )
}

export default Duration;


