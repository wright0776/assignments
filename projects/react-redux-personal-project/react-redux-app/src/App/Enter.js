import React from 'react';
import {Link} from 'react-router-dom';

function Enter() {
    return (
        <div className='enter'>
            <div className='sheep'></div>
            <h2>This is a really cool website...</h2>
            <h3>Enter at your own risk!</h3>
            <Link to='/main'>Enter</Link>
        </div>
    )
}

export default Enter
