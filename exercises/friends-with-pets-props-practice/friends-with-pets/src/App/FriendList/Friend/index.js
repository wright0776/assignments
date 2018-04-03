import React from "react";
import Pet from "./Pet/";

function Friend(props) {
    const { age, pets } = props.data;
    
    return (
        
        <div>
            <h3>{age}</h3>
            <Pet data = {pets} />
        </div>
    )
}

export default Friend;