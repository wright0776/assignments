import React from "react";

function Box(props) {

    const { backgroundColor, color, title, subtitle, info } = props

    return (
        <div style={{ backgroundColor: backgroundColor, color: color, padding: "20px", fontFamily: "georgia" }}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p style = {{ lineHeight: 2, letterSpacing: "1px" }}>{info}</p>
        </div>
    )
}

export default Box;