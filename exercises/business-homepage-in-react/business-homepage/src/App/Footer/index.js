import React from "react";
import Socs from "./SocLinks/"
import socUrls from "./SocLinks/socsCont.json"

function Footer(props) {

    const { footerClass, linksClass, links, socsClass, copyright, credits, me } = props;

    return (
        <div className={footerClass}>
            <ul className={linksClass}>
                {links.map(x => <a href=""><li>{x}</li></a>)}
            </ul>
            <ul className={socsClass}>
                <Socs poo={socUrls}></Socs>
            </ul>
            <div>
                {copyright}
                <p>{credits} <a href="">{me}</a></p>
            </div>
        </div>
    )
}

export default Footer;