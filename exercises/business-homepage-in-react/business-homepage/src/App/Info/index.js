import React from "react";

function Info (props) {

    const {infoTitle, info, infoClass} = props;

    return (
        <div className={infoClass}>
            <h3>{infoTitle}</h3>
            <p>{info}</p>
        </div>
    )
}

export default Info;