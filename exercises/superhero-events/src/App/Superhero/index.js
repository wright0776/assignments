import React from 'react'

function Superhero (props) {
    console.log(props);

    const { name, catchphrase, image } = props.hero;
    const { handleclick } = props;
    


    return (
        <div onClick={(e)=>handleclick(e,catchphrase)}>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            {/* <p>{catchphrase}</p> */}
        </div>
    )
}

export default Superhero;