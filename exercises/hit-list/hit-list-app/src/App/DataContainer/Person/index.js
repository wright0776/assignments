import React from 'react'

function Person(props) {
    console.log(props)

    const { name, image } = props;
    return (
        <li className='person'>
            <h2>{name}</h2>
            <div className={name.toLowerCase()}>
                <img src={image} alt={name} />
            </div>
        </li>
    )
}

export default Person
