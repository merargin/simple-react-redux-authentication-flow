import React from 'react';

const MAX_RATING = 5;

const Rating = ({rating}) => {
    let classNames = [];
    for(var index = 0; index < MAX_RATING; index++){
        classNames.push({
         key:index,
         cName: rating > index ? 'star': ''
        });
    }
    const stars = classNames.map((cNameObj) =>
        <span key={cNameObj.key} className={cNameObj.cName}>☆</span>
    );
    return (
        <div className="rating">Rating - { stars }</div>
    )
}

export default Rating;
