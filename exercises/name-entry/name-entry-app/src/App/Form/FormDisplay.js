import React from 'react'
import List from "./List/";

const FormDisplay = (props) => {
    const {handleChange,handleSubmit,name,people} = props;

    return (
        <form onSubmit={handleSubmit}>
            <h1>{name}</h1>
            <input name="name" onChange={handleChange} type="text" placeholder="Enter Name" value={name}/>
            {name.length ? <p>Press Submit to add your name</p>:<p style={{color: "red"}}>Add your name!</p>}
            <button>Submit</button>
            <List people={people}></List>
        </form>
    )
}

export default FormDisplay;