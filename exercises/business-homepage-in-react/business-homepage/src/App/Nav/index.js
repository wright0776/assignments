import React from "react";

function Nav(props) {

    const { navClass, title, titleClass, subtitle, subtitleClass, ulClass, home, about, products, contact } = props

    return (
        <div className={navClass}>
            <h1 className={titleClass}>{title}</h1>
            <h3 className={subtitleClass}>{subtitle}</h3>
            <ul className={ulClass}>
                <li>{home}</li>
                <li>{about}</li>
                <li>{products}</li>
                <li>{contact}</li>
            </ul>
        </div>
    )
}

export default Nav;