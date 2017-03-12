import React from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getReadableTime = (createdAt) => {
    var date = new Date(createdAt);
    return date.getDay() + ' - ' + MONTHS[date.getMonth()] + ' - ' + date.getFullYear();
};

const CreatedTime = ({ createdAt }) => {
    return (
        <div className="created-time">Created - { getReadableTime(createdAt) }</div>
    )
}

export default CreatedTime;

