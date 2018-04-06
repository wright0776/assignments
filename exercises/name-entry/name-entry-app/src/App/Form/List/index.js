import React from "react";

const List = (props) => {
    const { people } = props;
    console.log(people)
    return (
        <ul>
            {people.map(name => <li>{name}</li>)}
        </ul>
    )
}

export default List;