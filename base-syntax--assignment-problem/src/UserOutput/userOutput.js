import React from 'react';

import './userOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hii.. I'm {props.userName}</p>
            <p>How are you doing today??</p>
        </div>
    );
};

export default userOutput;