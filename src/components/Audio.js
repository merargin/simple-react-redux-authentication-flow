import React from 'react';

const Audio = ({ url }) => {
    return (
        <audio className="audio" controls>
            <source src={url} />
        </audio>
    )
}

export default Audio;
