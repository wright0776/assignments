import React from "react";

function Cards(props) {
    console.log(props);
    const { spots } = props;

    return (
        <div className="cards">
            {spots.map(x =>
                <div className="card">
                    <div className="cardImg">
                        <img src={x.imgUrl} alt={x.altText} />
                    </div>
                    <h2>{x.place}</h2>
                    <h3>$ {x.price}</h3>
                    <h4>{x.timeToGo}</h4>
                </div>
            )}
        </div>
    )
}

export default Cards;