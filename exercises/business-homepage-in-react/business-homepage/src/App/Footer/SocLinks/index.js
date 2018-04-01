import React from "react"

function Socs (props) {
    
    const {facebook,twitter,pinterest,instagram} = props.poo;

    return (
        <div>
            <a href="https://facebook.com" className="facebook">
                <img src={facebook} alt="facebook.com"/>
            </a>
            <a href="https://twitter.com" className="twitter">
                <img src={twitter} alt="twitter.com"/>
            </a>
            <a href="https://pinterest.com" className="pinterest">
                <img src={pinterest} alt="pinterest.com"/>
            </a>
            <a href="https://instagram.com" className="instagram">
                <img src={instagram} alt="instagram.com"/>
            </a>
        </div>
    )
}

export default Socs;