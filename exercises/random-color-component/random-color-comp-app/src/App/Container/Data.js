import React from 'react'

function Data(props) {
    const {color} = props;
    console.log(color);
    return (
        <div className='data' style={{backgroundColor: `#${color}`}}>
            <h1 style={{color: `#${color}`}}>What a rad color!</h1>
            <h2 style={{color: `#${color}`}}>(and this text is the inverse of it)</h2>
        </div>
    )
}

export default Data
