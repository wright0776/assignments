import React from "react";
import Friend from "./Friend/"

function FriendList(props) {
    const { name } = props.data;
    
    return (
        <div>
            <h2>{name}</h2>
            <Friend data = {props.data} />
        </div>
    )
}

export default FriendList;