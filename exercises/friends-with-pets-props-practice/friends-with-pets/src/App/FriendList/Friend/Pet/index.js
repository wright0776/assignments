import React from "react";

function Pet(props) {

    const { data } = props;

    return (
        <div>
            <h3>Pets:</h3>
            {data.map((x, i) =>
                <div key={"pet" + i} style={{width: "24%", marginRight: 0, display: "inline-block"}}>
                    <h4 key={x.name + i}>Name: {x.name}</h4>
                    <p key={x.breed + i}>Breed: {x.breed}</p>
                </div>
            )}
        </div>
    )
}

export default Pet;